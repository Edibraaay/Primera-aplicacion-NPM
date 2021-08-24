const log4js = require("log4js");

let logger = log4js.getLogger();

logger.level = "debug"; //"production"

logger.info("La aplicacion se inicio con exito");
logger.warn("Peligro inminente: falta la libreria x en el sistema");
logger.error("No se encontró la función enviar Email");
logger.fatal("F bro");

function sumar(x,y){
    return x + y;

}

module.exports = sumar;