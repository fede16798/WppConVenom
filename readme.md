# WppConVenom
Configurando una respuesta automática al recibo de un mensaje por WhatsApp

# Correr proyecto
Para correr el proyecto "npm test", así se ejecuta venom y genera un codigo QR con el que se tiene que escanear para iniciar sesión con whatsApp web desde el celular.
Se genera una carpeta con un token para no tener que escanear el codigo cada vez que se ejecute la app.

# Crear sesión
Apenas creada la sesión, se envia un mensaje al numero enviado por parametro.
Creo el cliente --> await venom.create();

numeroAEnviar funciona como ID. El formato es el siguiente: 549(cod de area) + numero telefonico --> numeroAEnviar = "5491112345678@c.us";
recibe por parametro el ID (numero) y un mensaje como String --> await client.sendText(numeroAEnviar, primerMensaje);

# Enviar Mensaje personalizado
mencion = 1123456789
const enviarMencion = await cliente.sendMentioned(numeroAEnviar, `Hola @${mencion}`, [
      mencion
    ]);

# Enviar mensaje
cliente.sendText(message.from, "./imagen.jpg","nombre");
message.from funciona como ID. Captura el numero que envió un mensaje.

# Adjuntar un archivo 
cliente.sendFile(message.from, "./archivo.pdf","nombre");

Se pueden adjuntar imagenes, pdf, videos, links.

# Escuchar un mensaje
client.onMessage((message) => { ... }

Se podría verificar que cada chat tenga un token de tiempo, el cual puede recibir el mensaje con la información despues de X minutos, segundos, o lo deseado.
Asi por cada mensaje recibido no se envía la respuesta automática, sino que debe pasar un tiempo entre respuesta y respuesta.
