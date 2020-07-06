// Supports ES6
//import { create, Whatsapp } from 'venom-bot';
const venom = require('venom-bot');


//queRecibo es el mensaje que me envian -- queMando es la respuesta automatica
function creador () { 
  venom.create().then((client) =>  {
   client.onMessage((message) => {
    //Para que siempre responda tengo que comparar con distinto de null if (queRecibo !== null){ 
      //Si el body es igual al mensaje recibido se envia una respuesta
     if (message.body !== null) {
        client.sendText(message.from, respuestaAutomatica);
        //Enviar una imagen en caso de ser necesario
        //client.sendImage(message.from,'./bariloche.jpg',"bariloche");
        client.sendFile(message.from, './terminos_y_condiciones_de_teleconsulta_1.pdf', 'terminos y consultas')
        client.sendFile(message.from, './mail-attachment.googleusercontent.com.pdf', 'instructivo')
        } 
    })
  })
}

let respuestaAutomatica =  '1. Acceso a teleconsulta con la computadora ' + 
'\nhttps://youtu.be/9makNx-RS-A ' + '\n\n2. Acceso a teleconsulta con el celular ' + 
'\nhttps://youtu.be/Y1QxtNlxlEE '+ '\n\n3. Términos y condiciones: ' +
'\nhttps://www.buenosaires.gob.ar/sites/gcaba/files/terminos_y_condiciones_de_teleconsulta_1.pdf'

module.exports = {
  creador: creador
}

