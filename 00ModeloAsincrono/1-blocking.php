<?php
printf('Abriendo Archivo...<br>');
$fichero_url = fopen('archivo.txt', 'r');

$texto = '';

while ( $trozo = fgets($fichero_url) ) {
    $texto .= $trozo;
}

printf($texto);

printf('<br>Haciendo otra cosa');
?>