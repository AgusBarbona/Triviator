import express, { Request, Response } from 'express';
const app = express();
import pool from './app/models/db';

const port: number = parseInt (process.env.PORT || '3000', 10);


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

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
