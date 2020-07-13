# WppConVenom
Configurando una respuesta automática al recibo de un mensaje por WhatsApp

1- Una vez ejecutado "npm test" se ejecuta el venom y genera un codigo QR con el que se tiene que escanear para iniciar sesión con whatsApp web desde el celular.
Se genera una carpeta con un token para no tener que escanear el codigo cada vez que se ejecute la app.

2- Apenas creada la sesión, se envia un mensaje al numero enviado por parametro.

3- Por cada mensaje recibido se le puede responder.
Se pueden adjuntar imagenes, pdf, videos, links.

Se podría verificar que cada chat tenga un token de tiempo, el cual puede recibir el mensaje con la información despues de X minutos, segundos, o lo deseado.
Asi por cada mensaje recibido no se envía la respuesta automática, sino que debe pasar un tiempo entre respuesta y respuesta.

#numeroAEnviar funciona como ID. El formato es el siguiente: 549(cod de area) + numero telefonico.

let numeroAEnviar = "5491112345678@c.us";

#recibe por parametro el ID (numero) y un mensaje como String.

client.sendText(numeroAEnviar, primerMensaje);
