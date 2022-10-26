<?php
try {

    //Quede libre de cambiar cualquier persona estos datos por si sus datos son distintos.
    $host = "localhost";
    $database = "db_practica1";
    $user = "root";
    $password = "";

    $conexion = new msqli($host, $database, $user, $root);
} catch (\Throwable $th) {
    if ($conexion = -> connext_errno) {
        echo "No conectado.";
    }else{
        echo "Conectado";
    }
}
;

?>