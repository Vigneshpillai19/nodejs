const Logger = require('./Logger');

const logger = new Logger();

logger.on('message',data => console.log('Called Logger : ' + JSON.stringify(data)));

logger.log('Hello World!!!!')