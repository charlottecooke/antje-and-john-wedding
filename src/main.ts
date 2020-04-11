import * as Config from 'config';
import { Server } from './server';
import {
    log
} from './dependencies';

process.on('uncaughtException', (err: Error) => {
    log.error(err);
});
process.on('unhandledRejection', (reason: any) => {
    log.error(reason);
});

export const server = new Server(
    log,
    Config.get<number>('port')
).start();

