import cors from 'cors'
import express from 'express';
import {router} from '../routes/usuarios.js';
import { dbConnection } from '../database/config.js'
export class Server {
    

    constructor(){
        this.app = express();
        this.port =process.env.PORT;
        this.usuariosPath = '/api/usuarios';

        // Conectar a base de datos
        this.conectarDB();

        //Middlewares
        this.middlewares();

        // Rutas de mi aplicacion
        this.routes();
    }

    async conectarDB() {
        await dbConnection();
    }

    middlewares(){
        
        //Cors
        this.app.use( cors() );
        
        // Lectura y Parseo del Body
        this.app.use( express.json() );

        //Directorio publico
        this.app.use( express.static('public') );

    }

    routes(){
        this.app.use( this.usuariosPath , router );
    }

    listen(){
        
        this.app.listen(this.port, ()=>{
            console.log(`Servidor corriendo en http://localhost:${ this.port }`);
        });
    }

}