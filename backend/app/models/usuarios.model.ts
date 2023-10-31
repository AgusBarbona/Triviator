const sql = require('./db.ts');

interface Usuario {
    nombre: string;
    correo: string;
    contraseña: string;
}

class Usuario {
    nombre: string;
    correo: string;
    contraseña: string;

    constructor(usuario: Usuario) {
        this.nombre = usuario.nombre;
        this.correo = usuario.correo;
        this.contraseña = usuario.contraseña;
    }
}

const createUsuario = (newUsuario: Usuario, result: (err: Error | null, res: any) => void) => {
    sql.query('INSERT INTO usuarios SET ?', newUsuario, (err: any, res: any) => {
        if (err) {
            console.log('error: ', err);
            result(err, null);
            return;
        }

        console.log('created usuario: ', { id: res.insertId, ...newUsuario });
        result(null, { id: res.insertId, ...newUsuario });
    });
};

export default Usuario