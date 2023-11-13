import express, { Request, Response } from 'express';
const app = express();
import pool from './app/models/db';

const port: number = 3000;

app.get('/', async (req: Request, res: Response) => {
  try {
    // Obtener una conexión del pool
    const connection = await pool.getConnection();
    
    // Realiza operaciones en la base de datos según sea necesario
    res.send('Connected to the database. Hello World!');
    
    // Liberar la conexión de vuelta al pool
    connection.release();
  } catch (error: any) {
    res.status(500).json({ error: 'Error al conectar a la base de datos', details: error.message });
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});

