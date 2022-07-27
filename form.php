<?php
$nombre = $_POST['name'];
$mail = $_POST['mail'];
$mensaje = $_POST['textarea'];

$mensaje = "Este mensaje fue enviado por: " . $nombre . ",\r\n";
$mensaje = "Su email es: " . $mail . ",\r\n";
$mensaje = "Mensaje: " . $_POST['mensaje'] . ",\r\n";
$mensaje = "Enviado el: " . date('d/m/Y', time());

$para = "jhoesp@gmail.com";
$asunto = "Mensaje de mi sitio web";

mail($para, $asunto, utf8_decode($mensaje), $header);

header('Location:contacto.html');

?>