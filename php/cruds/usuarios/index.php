<?php

include '../../db/conex.php';

//=========================================================

if (isset($_GET["consultar"])) {
    $sqlGarantias = mysqli_query($conexionBD,"SELECT contrasena, id_rol FROM usuario WHERE id_usuario=".$_GET["consultar"]);
    $usuarios[0] = mysqli_fetch_all($sqlGarantias,MYSQLI_ASSOC);
    if(mysqli_num_rows($sqlGarantias) > 0){
        $usuarios[1] = ["success"=>1];
        echo json_encode($usuarios);
        exit();
    }
    else{
        $usuarios[1] = ["success"=>0];
        echo json_encode($usuarios);
        exit();
    }
}
    



$sqlGarantias = mysqli_query($conexionBD,"SELECT * FROM usuario");
if(mysqli_num_rows($sqlGarantias) > 0){
    $usuarios = mysqli_fetch_all($sqlGarantias,MYSQLI_ASSOC);
    echo json_encode($usuarios);
    exit();
}
else{ echo json_encode([["success"=>0]]); }
?>