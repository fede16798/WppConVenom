# WppConVenom
Configurando una respuesta automática al recibo de un mensaje por WhatsApp

1- Una vez ejecutado "npm test" se ejecuta el venom y genera un codigo QR con el que se tiene que escanear para iniciar sesión con whatsApp web desde el celular.
Se genera una carpeta con un token para no tener que escanear el codigo cada vez que se ejecute la app.

2- Por cada mensaje recibido, se crea un cliente y se le responde con la respuestaAutomatica generada.
Se pueden adjuntar imagenes, pdf, videos, links.
Para que no responda por cada mensaje recibido, se puede cambiar la condición "if (message.body !== null)" y cambiar null por lo esperado.

Estaría bueno que no se cree un cliente por cada mensaje, sino verificar si el cliente existe y asi no crearlo todo el tiempo. 
También estaría bien que cada cliente tenga un token de tiempo, el cual puede recibir el mensaje con la información despues de X minutos, segundos, o lo deseado.
Asi por cada mensaje recibido no se envía la respuesta automática, sino que debe pasar un tiempo entre respuesta y respuesta.
