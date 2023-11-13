"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sql = require('./db.ts');
class Usuario {
    constructor(usuario) {
        this.nombre = usuario.nombre;
        this.correo = usuario.correo;
        this.contraseña = usuario.contraseña;
    }
}
const createUsuario = (newUsuario, result) => {
    sql.query('INSERT INTO usuarios SET ?', newUsuario, (err, res) => {
        if (err) {
            console.log('error: ', err);
            result(err, null);
            return;
        }
        console.log('created usuario: ', Object.assign({ id: res.insertId }, newUsuario));
        result(null, Object.assign({ id: res.insertId }, newUsuario));
    });
};
exports.default = createUsuario;
