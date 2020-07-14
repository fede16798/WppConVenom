// Supports ES6
//import { create, Whatsapp } from 'venom-bot';
const venom = require("venom-bot");
//numeroAEnviar debe ser un string con el siguiente formato 'cod area + numero@c.us'
let numeroAEnviar = "5491112345678@c.us";
//mencion es un strin y solo tiene el cod area + numero de la persona a la que se quiere mencionar luego
let mencion = '5491112345678'

async function creador() {
  //Creo la sesión en WhatsApp Web
    const cliente = await venom.create();
    /*Apenas creada la sesión, se envía un mensaje al numeroAEnviar que es el ID de la persona. */
    const enviarMensaje = await cliente.sendText(numeroAEnviar, primerMensaje);
    /*Envio un mensaje mencionando al reminente. En este caso es necesario agregar el @ para poder capturar el nombre*/
    const enviarMencion = await cliente.sendMentioned(numeroAEnviar, `Hola @${mencion} te hablo desde un bot que hice`, [
      mencion
    ]);

    console.log(enviarMensaje.toString())
    /* Si recibo un mensaje lo comparo y respondo. message.from Es el ID del chat al cual le debo responder. */
    cliente.onMessage((message) => {
      console.log(message)
      //Capturo el nombre de la persona cuando recibo un mensaje
      let nombre = message.sender.pushname;
      cliente.sendText(message.from, `Hola ${nombre}`);
      let mensajeRecibido = message.body.toLowerCase();
      if (mensajeRecibido === "info" || mensajeRecibido === "información") {
        cliente.sendText(message.from, respuestaAutomatica);
        cliente.sendFile(message.from, "./terminos_y_condiciones_de_teleconsulta_1.pdf","terminos y consultas");
        cliente.sendFile(message.from, "./mail-attachment.googleusercontent.com.pdf","instructivo");
      } else { 
        cliente.sendText(message.from, miRespuestaErronea);
      }
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