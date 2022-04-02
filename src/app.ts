import express, { Application } from 'express';
import mongoose from 'mongoose';
import compression from 'compression';
import cors from 'cors';
import morgan from 'morgan'
import helmet from 'helmet' ;
import config from 'config';
import Controller from './utils/interfaces/controller.interface';
import errorMiddleware from './middleware/error.middleware';

class App {
    public port: number;
    public express: Application;
    public host: string;

    constructor(controllers: Controller[], port: number, host: string){
        this.port = port;
        this.express = express();
        this.host = host;

        this.initDBConnection();
        this.initMiddleware();
        this.initControllers(controllers);
        this.initErrorHandling();

    }

    private initMiddleware(): void{
        this.express.use(helmet());
        this.express.use(cors());
        this.express.use(morgan('dev'));
        this.express.use(express.json());
        this.express.use(express.urlencoded({ extended: false }))
        this.express.use(compression());
    }

    private initControllers(controllers: Controller[]): void {
        controllers.forEach((controller: Controller) => {
            this.express.use('/api', controller.router);
        })
    }

    private initErrorHandling(): void {
        this.express.use(errorMiddleware);
    }

    private initDBConnection(): void {
        const mongoUri = config.get("db.uri") as string;
        mongoose.connect(mongoUri)
        .then(() => console.log("DB COnnected"))
        .catch(e => console.log(e))
    }

    public listen(): void {
        this.express.listen(this.port, this.host, () => {
            console.log(`App listening on http://${this.host}:${this.port}`)
        })
    }
}

export default App;