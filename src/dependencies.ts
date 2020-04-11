import * as Logger from 'bunyan';
import * as Config from 'config';

export const log = Logger.createLogger({
    name: Config.get<string>('app.name'),
    level: 'trace',
    src: true,
    serializers: Logger.stdSerializers
});
