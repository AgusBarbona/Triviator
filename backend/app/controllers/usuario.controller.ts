const Usuario = require ('./models/usuarios.model.ts');

import { Request, Response } from 'express';

interface Usuario {
  nombre: string;
  correo: string;
  contraseña: string | false;
}

export const create = (req: Request, res: Response) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  // Create a Usuario
  const usuario: Usuario = {
    nombre: req.body.nombre,
    correo: req.body.correo,
    contraseña: req.body.contraseña || false
  };

  // Save Usuario in the database
  Usuario.create(usuario, (err: Error, data: any) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Usuario."
      });
    else res.send(data);
  });
};
