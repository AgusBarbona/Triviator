"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const db_1 = __importDefault(require("./app/models/db"));
const cors_1 = __importDefault(require("cors"));
const port = parseInt(process.env.PORT || '3000', 10);
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.get("/", (req, res) => {
    res.send("Hello home server!");
});
// Nueva ruta /api
app.get("/api", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Obtener una conexión del pool
        const connection = yield db_1.default.getConnection();
        // Realizar operaciones en la base de datos según sea necesario
        res.json({ message: "Hello server!" });
        // Liberar la conexión de vuelta al pool
        connection.release();
    }
    catch (error) {
        res.status(500).json({ error: 'Error al conectar a la base de datos', details: error.message });
    }
}));
// Nueva ruta /api/v1
app.get("/api/v1", (req, res) => {
    res.json({ message: "Hola desde boton" });
});
// nueva ruta para el registro de usuarios
app.post('/api/registro', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, correo, contraseña } = req.body;
    try {
        const connection = yield db_1.default.getConnection();
        // Verificar si el usuario ya existe
        const [existingUsers] = yield connection.execute('SELECT * FROM usuarios WHERE username = ? OR correo = ?', [username, correo]);
        if (Array.isArray(existingUsers) && existingUsers.length > 0) {
            res.status(400).json({ mensaje: 'El usuario o correo ya están registrados' });
            return;
        }
        // Insertar el nuevo usuario en la base de datos
        const [result] = yield connection.execute('INSERT INTO usuarios (username, correo, contraseña) VALUES (?, ?, ?)', [username, correo, contraseña]);
        connection.release();
        // Verificar si la inserción fue exitosa
        if (result && 'insertId' in result) {
            res.status(200).json({ mensaje: 'Usuario registrado correctamente', userId: result.insertId });
        }
        else {
            res.status(500).json({ mensaje: 'Error al registrar usuario' });
        }
    }
    catch (error) {
        console.error('Error al registrar usuario:', error);
        res.status(500).json({ mensaje: 'Error interno del servidor' });
    }
}));
// nueva ruta para manejar el inicio de sesión
app.post('/api/login', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, password } = req.body;
    console.log('Intento de inicio de sesión para el usuario:', username);
    try {
        // Obtener una conexión del pool
        const connection = yield db_1.default.getConnection();
        // Realizar la consulta para verificar las credenciales
        const [rows] = yield connection.execute('SELECT * FROM usuarios WHERE username = ? AND contraseña = ?', [username, password]);
        // Liberar la conexión de vuelta al pool
        connection.release();
        if (Array.isArray(rows) && rows.length > 0) {
            res.status(200).json({ mensaje: 'Autenticación exitosa' });
        }
        else {
            res.status(401).json({ mensaje: 'Usuario o contraseña incorrectos' });
        }
    }
    catch (error) {
        console.error('Error al autenticar usuario:', error);
        res.status(500).json({ mensaje: 'Error interno del servidor' });
    }
}));
// Nueva ruta para obtener una pregunta aleatoria
app.get('/api/obtener-pregunta-aleatoria', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const connection = yield db_1.default.getConnection();
        // Obtener una categoría aleatoria
        const [categorias] = yield connection.execute('SELECT * FROM categorias ORDER BY RAND() LIMIT 1');
        const categoriaId = categorias[0].id_categoria;
        // Obtener una pregunta aleatoria de la categoría seleccionada
        const [preguntas] = yield connection.execute('SELECT * FROM preguntas WHERE id_categoria = ? ORDER BY RAND() LIMIT 1', [categoriaId]);
        if (preguntas.length === 0) {
            res.status(404).json({ mensaje: 'No se encontraron preguntas para la categoría seleccionada' });
            return;
        }
        const pregunta = preguntas[0].enunciado;
        // Obtener todas las opciones para la pregunta seleccionada
        const opciones = [
            preguntas[0].respuesta_correcta,
            preguntas[0].respuesta_opcional_1,
            preguntas[0].respuesta_opcional_2,
            preguntas[0].respuesta_opcional_3,
        ];
        // Barajar las opciones de manera aleatoria
        opciones.sort(() => Math.random() - 0.5);
        connection.release();
        res.status(200).json({ pregunta, opciones });
    }
    catch (error) {
        console.error('Error al obtener pregunta aleatoria:', error);
        res.status(500).json({ mensaje: 'Error interno del servidor' });
    }
}));
app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`);
});
