const ErrorLogger = require('./error-alarm.js');

const errorLogger = new ErrorLogger();
setInterval(errorLogger.checkErrorFrecuency(), 60000); 