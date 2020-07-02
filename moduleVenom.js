// Supports ES6
//import { create, Whatsapp } from 'venom-bot';
const venom = require('venom-bot');

//queRecibo es el mensaje que me envian -- queMando es la respuesta automatica
function creador (queMando) {
  venom.create().then((client) =>  {
   client.onMessage((message) => {
    //Para que siempre responda tengo que comparar con distinto de null if (queRecibo !== null){ 
      //Si el body es igual al mensaje recibido se envia una respuesta
     if (message.body !== null) {
        client.sendText(message.from, queMando);
        client.sendImage(message.from,'./bariloche.jpg',"bariloche");
        client.sendI
        } 
    })
  })
  
}

module.exports = {
  creador: creador
}