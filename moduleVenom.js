// Supports ES6
//import { create, Whatsapp } from 'venom-bot';
const venom = require("venom-bot");
//numeroAEnviar debe ser un string con el siguiente formato 'numero@c.us'
let numeroAEnviar = null;

function creador() {
  //Creo la sesión en WhatsApp Web
  venom.create().then((client) => {
    /* Apenas creada la sesión, se envía un mensaje al numeroAEnviar que es el ID de la persona. */
    client.sendText(numeroAEnviar, primerMensaje);
    /* Si recibo un mensaje lo comparo y respondo. message.from Es el id del chat al cual le debo responder. */
    client.onMessage((message) => {
      let mensajeRecibido = message.body.toLowerCase();
      if (mensajeRecibido === "info" || mensajeRecibido === "información") {
        client.sendText(message.from, respuestaAutomatica);
        client.sendFile(message.from, "./terminos_y_condiciones_de_teleconsulta_1.pdf","terminos y consultas");
        client.sendFile(message.from, "./mail-attachment.googleusercontent.com.pdf","instructivo");
      } else { 
        client.sendText(message.from, miRespuestaErronea);
      }
    });
  });
}

let respuestaAutomatica =
  "1. Acceso a teleconsulta con la computadora " + "\nhttps://youtu.be/9makNx-RS-A " +
  "\n\n2. Acceso a teleconsulta con el celular " + "\nhttps://youtu.be/Y1QxtNlxlEE " +
  "\n\n3. Términos y condiciones: " + "\nhttps://www.buenosaires.gob.ar/sites/gcaba/files/terminos_y_condiciones_de_teleconsulta_1.pdf";

let miRespuestaErronea =
  "La palabra clave es incorrecta. Para recibir más detalles escriba info o información";

let primerMensaje =
  "Hola estoy hablando desde Venom. \n Escriba Información o Info para más detalles.";

module.exports = {
  creador: creador,
};
