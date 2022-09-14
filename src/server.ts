import express, { Application } from 'express';
import { IServer } from './interfaces/IServer';
import routes from './config/routes';

export class Server implements IServer {
    private app: Application;
    private port: number;

    constructor(port: number) {
        this.app = express();
        this.port = port;
        this.initializeRoutes();
    }

    private initializeRoutes(): void {
        routes.forEach(route => {
            this.app[route.method](route.path, route.controller);
        })
    }

    public async run(): Promise<void> {
        return new Promise((resolve, reject) => {
            this.app.listen(this.port)
                .on('close', () => reject())
                .on('listening', () => {
                    resolve()
                    process.stdout.write('\u001b[34m Server is running in port ' + this.port)
                })
        })
    }
}