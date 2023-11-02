import express, { Request, Response } from 'express';

const app = express();
const port: number = 3000;

app.get('/', (req: Request, res: Response) => {
    res.send('Hello World');
});

app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`);
});

















/* import express, { Express, Application } from 'express'; 
import morgan from 'morgan';



//routes
import usuarioRoutes from './app/routes/usuario.routes';
const app: Express = express();



export class App{

    private app: Application ;

    constructor(private port?: number | string) {
        this.app = express();
        this.settings();
        this.middlewares();
        this.routes();
    }

    settings(){
        this.app.set('port', this.port || process.env.PORT || 3000);
    }

    middlewares() {
        this.app.use(morgan('dev'))
    }

    routes() {
        this.app.use(usuarioRoutes);
    }

    async listen () {
        await this.app.listen(this.app.get('port'));
        console.log('Server on port', 3000)
    }
}

export default app; */