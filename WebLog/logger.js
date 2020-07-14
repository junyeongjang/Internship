const winston = require('winston');
const { createLogger, format, transports } = require('winston');
const winstonDaily = require('winston-daily-rotate-file');
const { combine, timestamp, printf } = format;

// const customFormat = printf(info => {
//     return `${ifo.timestamp}, ${info.message}`;
// });

const logger = winston.createLogger({
    format: combine(
        winston.format.json()
        // timestamp({
        //     format: 'YYYY-MM-DD HH:mm:ss',
        // }),
        // customFormat
    ),
    transports: [
        new winston.transports.Console(),
        new winstonDaily({
            level: 'info',
            datePattern: 'YYYYMMDD',
            dirname: './logs',
            filename: `WebLog_%DATE%.log`,
            maxSize: null,
            maxFiles: 14  //14개 저장-> 즉, 14일 
        }),
    ],
});

logger.stream = {
    write: message => {
      logger.info(message);
    }
};

module.exports = logger;