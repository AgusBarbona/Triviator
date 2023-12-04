"use strict";
/*import * as mysql from 'mysql2/promise';
import dbConfig from '../config/db.config';



// Crear un pool de conexiones
const pool = mysql.createPool({
  host: dbConfig.HOST,
  user: dbConfig.USER,
  password: dbConfig.PASSWORD,
  database: dbConfig.DB,
  waitForConnections: true,
  connectionLimit: 10, // Puedes ajustar el límite según tus necesidades
  queueLimit: 0
});

// Exportar el pool
export default pool;
*/
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
exports.pool = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const promise_1 = require("mysql2/promise");
exports.pool = (0, promise_1.createPool)({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DB,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});
function DbConnection() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            console.log('Connecting to the database...');
            const connection = yield exports.pool.getConnection();
            console.log('Successfully connected to the database.');
            connection.release();
        }
        catch (error) {
            console.error('Error connecting to the database:', error);
        }
    });
}
DbConnection();
