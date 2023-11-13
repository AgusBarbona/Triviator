"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.create = void 0;
const Usuario = require('./models/usuarios.model.ts');
const create = (req, res) => {
    // Validate request
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }
    // Create a Usuario
    const usuario = {
        nombre: req.body.nombre,
        correo: req.body.correo,
        contraseña: req.body.contraseña || false
    };
    // Save Usuario in the database
    Usuario.create(usuario, (err, data) => {
        if (err)
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Usuario."
            });
        else
            res.send(data);
    });
};
exports.create = create;
