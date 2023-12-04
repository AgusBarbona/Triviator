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

import dotenv from 'dotenv';
dotenv.config();

import { createPool, Pool, Connection } from 'mysql2/promise';

export const pool: Pool = createPool({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DB,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

async function DbConnection() {
  try {
    console.log('Connecting to the database...');
    const connection = await pool.getConnection();
    console.log('Successfully connected to the database.');
    connection.release();
  } catch (error) {
    console.error('Error connecting to the database:', error);
  }
}

DbConnection();