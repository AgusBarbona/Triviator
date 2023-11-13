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
const port = 3000;
app.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Obtener una conexión del pool
        const connection = yield db_1.default.getConnection();
        // Realiza operaciones en la base de datos según sea necesario
        res.send('Connected to the database. Hello World!');
        // Liberar la conexión de vuelta al pool
        connection.release();
    }
    catch (error) {
        res.status(500).json({ error: 'Error al conectar a la base de datos', details: error.message });
    }
}));
app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`);
});
