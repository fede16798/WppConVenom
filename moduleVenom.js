// Supports ES6
//import { create, Whatsapp } from 'venom-bot';
const venom = require('venom-bot');

//Creo un cliente para manejarlo cuando recibo un mensaje, para poder responderle.
function creador () {
  venom.create().then((client) =>  {
   client.onMessage((message) => {
      //Si el body es igual a null responde siempre
     if (message.body !== null) {
        client.sendText(message.from, respuestaAutomatica);
        //Enviar una imagen en caso de ser necesario
        //client.sendImage(message.from,'./bariloche.jpg',"bariloche");
        } 
    })
  })
}

let respuestaAutomatica =  '1. Acceso a teleconsulta con la computadora: ' + 
'\nhttps://youtu.be/9makNx-RS-A ' + '\n\n2. Acceso a teleconsulta con el celular: ' + 
'\nhttps://youtu.be/Y1QxtNlxlEE '+ '\n\n3. Términos y condiciones: ' +
'\nhttps://www.buenosaires.gob.ar/sites/gcaba/files/terminos_y_condiciones_de_teleconsulta_1.pdf'

module.exports = {
  creador: creador
}