import express, { Request, Response } from 'express';
const app = express();
import pool from './app/models/db';
import cors from 'cors';

const port: number = parseInt (process.env.PORT || '3000', 10);


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

// nueva ruta para el registro de usuarios

app.post('/api/registro', async (req: Request, res: Response) => {
  const { username, correo, contraseña } = req.body;

  try {
    const connection = await pool.getConnection();

    // Verificar si el usuario ya existe
    const [existingUsers] = await connection.execute('SELECT * FROM usuarios WHERE username = ? OR correo = ?', [username, correo]);

    if (Array.isArray(existingUsers) && existingUsers.length > 0) {
      res.status(400).json({ mensaje: 'El usuario o correo ya están registrados' });
      return;
    }

    // Insertar el nuevo usuario en la base de datos
    const [result] = await connection.execute('INSERT INTO usuarios (username, correo, contraseña) VALUES (?, ?, ?)', [username, correo, contraseña]);

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


// nueva ruta para manejar el inicio de sesión
app.post('/api/login', async (req: Request, res: Response) => {
  const { username, password } = req.body;
  console.log('Intento de inicio de sesión para el usuario:', username);

  try {
    // Obtener una conexión del pool
    const connection = await pool.getConnection();

    // Realizar la consulta para verificar las credenciales
    const [rows] = await connection.execute('SELECT * FROM usuarios WHERE username = ? AND contraseña = ?', [username, password]);

    // Liberar la conexión de vuelta al pool
    connection.release();

    if (Array.isArray(rows) && rows.length > 0) {
      res.status(200).json({ mensaje: 'Autenticación exitosa' });
    } else {
      res.status(401).json({ mensaje: 'Usuario o contraseña incorrectos' });
    }
  } catch (error) {
    console.error('Error al autenticar usuario:', error);
    res.status(500).json({ mensaje: 'Error interno del servidor' });
  }
});


app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
