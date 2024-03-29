<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    //Obtenemos los datos del formulario
    $nombre = $_POST['name'];
    $email = $_POST['email'];
    $telefono = $_POST['Phone'];
    $mensaje = $_POST['Message'];
    $archivo = $_POST['file'];

    //Configuramos el correo eléctronico de Minimal Shirt
    $destinatario = "minimalshirt001@gmail.com";
    $asunto="Nuevo mensaje de contacto";
    $cuerpoMensaje ="Nombre: $nombre\n";
    $cuerpoMensaje .="Email: $email\n";
    $cuerpoMensaje .="Teléfono: $Teléfono\n";
    $cuerpoMensaje .="Mensaje: $mensaje\n";
    $cuerpoMensaje .="Archivo: $archivo\n";

    //Enviaamos el correo electrónico
    if(mail($destinatario,$asunto,$cuerpoMensaje)){
        echo "Correo enviado correctamente";
    }else{
        echo "Error al enviar el correo";
    }
}
?>