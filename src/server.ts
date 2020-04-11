import * as Http from 'http';
import * as Logger from 'bunyan';
import * as Express from 'express';
import * as Path from 'path';
import * as BodyParser from 'body-parser';
import { Nuxt } from 'nuxt';
import * as HttpStatusCode from 'http-status-codes';
import * as Config from 'config';

const NuxtConfig = require('../nuxt.config');

export class Server {
    public app: Express.Application;
    private server: Http.Server;
    private port: number;

    private readonly nuxt: Nuxt;

    constructor(log: Logger, port: number) {
        const app = Express();
        this.port = port;
        this.nuxt = new Nuxt(NuxtConfig);

        // Set up public assets route
        app.use(Express.static(Path.join(__dirname, 'public')));
        app.set('view engine', '.html');

        // Set up parser helpers
        app.use(BodyParser.urlencoded({ extended: true }));
        app.use(BodyParser.json());

        app.get('/ping', (_req: Express.Request, res: Express.Response) =>
        res.status(HttpStatusCode.OK).send({
            name: Config.get<string>('app.name'),
            status: 'OK',
            environment: process.env.NODE_ENV
        }));

        app.use(this.nuxt.render);

        this.server = Http.createServer(app);
        this.server.on('error', (err: Error) => {
            log.error(err);
        });
        this.server.on('listening', () => {
            log.info(`Server listening on port ${port}`);
        });
    }

    public start(): Http.Server {
        return this.server.listen(this.port);
    }

    public stop(): void {
        this.server.close();
    }
}
