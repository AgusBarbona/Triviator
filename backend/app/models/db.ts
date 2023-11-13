import * as mysql from 'mysql2/promise';
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
