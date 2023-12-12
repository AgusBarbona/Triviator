import express, { Request, Response } from 'express';
const app = express();
import { pool } from './app/models/db';
import cors from 'cors';
import jwt, { Secret } from 'jsonwebtoken';
import { RowDataPacket } from 'mysql2';

// Definición de tipo para el payload del token
interface TokenPayload {
  username: string;
  avatar: string;
}

interface AvatarUpdateRequest extends Request {
  body: {
    username: string;
    avatar: string;
  };
}
function verificaToken(req: Request, res: Response, next: Function) {
  const token = req.headers.authorization?.split(' ')[1] || req.headers.authorization;

  if (!token) {
    return res.status(401).json({ mensaje: 'Token no proporcionado' });
  }

  try {
    const decoded = jwt.verify(token, secretKey) as TokenPayload;
    req.body.username = decoded.username;
    next();
  } catch (error) {
    return res.status(403).json({ mensaje: 'Token no válido' });
  }
}

const port: number = parseInt (process.env.PORT || '3000', 10);
const secretKey: Secret = 'triviatorProyecto2023'


app.use(express.json());
app.use(cors());



app.get("/", (req: Request, res: Response) => {
  res.send("Hello home server!");
});

// Nueva ruta /api
app.get("/api", async (req: Request, res: Response) => {
  try {
    // Obtener una conexión del pool
    const connection = await pool.getConnection();
    
    // Realizar operaciones en la base de datos según sea necesario
    res.json({ message: "Hello server!" });
    
    // Liberar la conexión de vuelta al pool
    connection.release();
  } catch (error: any) {
    res.status(500).json({ error: 'Error al conectar a la base de datos', details: error.message });
  }
});

// Nueva ruta /api/v1
app.get("/api/v1", (req: Request, res: Response) => {
  res.json({ message: "Hola desde boton" });
});

// nueva ruta para el registro de users

app.post('/api/registro', async (req: Request, res: Response) => {
  const { username, email, password } = req.body;

  try {
    const connection = await pool.getConnection();

    // Verificar si el usuario ya existe
    const [existingUsers] = await connection.execute('SELECT * FROM users WHERE username = ? OR email = ?', [username, email]);
    console.log()
    if (Array.isArray(existingUsers) && existingUsers.length > 0) {
      res.status(400).json({ mensaje: 'El usuario o email ya están registrados' });
      return;
    }

    // Insertar el nuevo usuario en la base de datos
    const [result] = await connection.execute('INSERT INTO users (username, email, password) VALUES (?, ?, ?)', [username, email, password]);
    
    connection.release();

    // Verificar si la inserción fue exitosa
    if (result && 'insertId' in result) {
      res.status(200).json({ mensaje: 'Usuario registrado correctamente', userId: result.insertId });
    } else {
      res.status(500).json({ mensaje: 'Error al registrar usuario' });
    }
  } catch (error) {
    console.error('Error al registrar usuario:', error);
    res.status(500).json({ mensaje: 'Error interno del servidor' });
  }
});

// middleware para verificar el token
//const verificaToken = (
  //req: Request<any, any, { username?: string }>,
  //res: Response,
  //next: Function
//) => {
  //const token = req.headers.authorization;

  //if (!token) {
    //return res.status(401).json({ mensaje: 'Token no proporcionado' });
  //}

  //try {
    //const decoded = jwt.verify(token, secretKey) as TokenPayload;
    //req.body = { ...req.body, username: decoded.username };
    //next();
  //} catch (error) {
    //return res.status(403).json({ mensaje: 'Token no válido' });
  //}
//};


// nueva ruta para manejar el inicio de sesión

app.post('/api/login', async (req: Request, res: Response) => {
  const { username, password } = req.body;
  console.log('Intento de inicio de sesión para el usuario:', username);

  try {
    // Obtener una conexión del pool
    const connection = await pool.getConnection();

    // Realizar la consulta para verificar las credenciales
    const [rows] = await connection.execute('SELECT * FROM users WHERE username = ? AND password = ?', [username, password]);

    // Liberar la conexión de vuelta al pool
    connection.release();

    if (Array.isArray(rows) && rows.length > 0) {
     // Generar un token JWT
      const token = jwt.sign({ username }, secretKey, { expiresIn: '1h' });

      res.status(200).json({ mensaje: 'Autenticación exitosa', token });
    } else {
      res.status(401).json({ mensaje: 'Usuario o contraseña incorrectos' });
    }
  } catch (error) {
    console.error('Error al autenticar usuario:', error);
    res.status(500).json({ mensaje: 'Error interno del servidor' });
  }
});

const obtenerNombreDeUsuarioDesdeSesion = (req: Request): string | null => {
  const username = req.body?.username;

  // Verificar si se proporcionó un nombre de usuario
  if (username) {
    return username;
  }

  return null;
};

interface Pregunta {
  id_pregunta: number;
  id_categoria: number;
  enunciado: string;
  respuesta_correcta: string;
  respuesta_opcional_1: string;
  respuesta_opcional_2: string;
  respuesta_opcional_3: string;
}

interface Categoria {
  id_categoria: number;
}

// Nueva ruta para obtener una pregunta aleatoria
app.get('/api/obtener-pregunta-aleatoria', async (req: Request, res: Response) => {
  try {
    const connection = await pool.getConnection();

    // Obtener una categoría aleatoria
    const [categorias] = await connection.execute('SELECT * FROM categorias ORDER BY RAND() LIMIT 1') as any;
    const categoriaId = categorias[0].id_categoria;

    // Obtener una pregunta aleatoria de la categoría seleccionada
    const [preguntas] = await connection.execute('SELECT * FROM preguntas WHERE id_categoria = ? ORDER BY RAND() LIMIT 1', [categoriaId]) as any;

    if (preguntas.length === 0) {
      res.status(404).json({ mensaje: 'No se encontraron preguntas para la categoría seleccionada' });
      return;
    }

    const pregunta = preguntas[0].enunciado;

    // Obtener todas las opciones para la pregunta seleccionada
    const opciones: string[] = [
      preguntas[0].respuesta_correcta,
      preguntas[0].respuesta_opcional_1,
      preguntas[0].respuesta_opcional_2,
      preguntas[0].respuesta_opcional_3,
    ];

    // Barajar las opciones de manera aleatoria
    opciones.sort(() => Math.random() - 0.5);

    connection.release();

    res.status(200).json({ pregunta, opciones, respuestaCorrecta: preguntas[0].respuesta_correcta });
  } catch (error) {
    console.error('Error al obtener pregunta aleatoria:', error);
    res.status(500).json({ mensaje: 'Error interno del servidor' });
  }
});

// Ruta para manejar la respuesta del usuario y registrar la puntuación
app.post('/api/verificar-respuesta', async (req: Request, res: Response) => {
  const { idPregunta, opcionSeleccionada } = req.body;

  try {
    const username = obtenerNombreDeUsuarioDesdeSesion(req);
    /*if (!username) {
      res.status(401).json({ mensaje: 'Usuario no autenticado' });
      return;
    }*/

    const connection = await pool.getConnection();
    const [respuesta] = await connection.query(
      'SELECT respuesta_correcta FROM preguntas WHERE id_pregunta = ?', 
      [idPregunta]
    );

    const respuestaCorrecta = (respuesta as RowDataPacket[])[0]?.respuesta_correcta;

    if (opcionSeleccionada === respuestaCorrecta) {
      await connection.query(
        'UPDATE users SET points = points + 10 WHERE username = ?', 
        [username]
      );
    
      res.status(200).json({ mensaje: 'Respuesta correcta. Sumar 10 puntos.', esCorrecta: true });
    } else {
      res.status(200).json({ mensaje: 'Respuesta incorrecta. No se suman puntos.', esCorrecta: false });
    }

    connection.release();
  } catch (error) {
    console.error('Error al procesar la respuesta del usuario:', error);
    res.status(500).json({ mensaje: 'Error interno del servidor' });
  }
});
// Ruta para actualizar el avatar del usuario
app.post('/api/actualizar-avatar', verificaToken, async (req: Request, res: Response) => {
  const { username, avatar } = req.body;

  try {
    const connection = await pool.getConnection();
    const [result] = await connection.execute(
      'UPDATE users SET avatar = ? WHERE username = ?',
      [avatar, username]
    );
    connection.release();

    if (result && 'affectedRows' in result && result.affectedRows > 0) {
      res.status(200).json({ mensaje: 'Avatar actualizado correctamente' });
    } else {
      res.status(400).json({ mensaje: 'No se pudo actualizar el avatar' });
    }
  } catch (error) {
    console.error('Error al actualizar avatar:', error);
    res.status(500).json({ mensaje: 'Error interno del servidor' });
  }
});


/*app.get('/api/user-info', verificaToken, async (req: Request, res: Response) => {
  const username = obtenerNombreDeUsuarioDesdeSesion(req);
  if (username) {
    try {
      const connection = await pool.getConnection();
      const [rows] = await connection.execute('SELECT username, avatar FROM users WHERE username = ?', [username]);

      if (rows.length > 0) {
        const user = rows[0];
        res.json(user);
      } else {
        res.status(404).json({ mensaje: 'Usuario no encontrado' });
      }

      connection.release();
    } catch (error) {
      console.error('Error al obtener la información del usuario:', error);
      res.status(500).json({ mensaje: 'Error interno del servidor' });
    }
  } else {
    res.status(401).json({ mensaje: 'Usuario no autenticado' });
  }
});*/

app.listen(port, () => {
  console.log(`Servidor ejecutándose en http://localhost:${port}`);
});