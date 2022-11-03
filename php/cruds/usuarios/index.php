<?php

include '../../db/conex.php';

//=========================================================

if (isset($_GET["consultar"])) {
    $sqlGarantias = mysqli_query($conexionBD,"SELECT contraseña FROM cuenta_usuario WHERE id_usuario =".$_GET["consultar"]);
    if(mysqli_num_rows($sqlGarantias) > 0){
        $usuarios = mysqli_fetch_all($sqlGarantias,MYSQLI_ASSOC);
        echo json_encode($usuarios);
        exit();
    }
    else{  echo json_encode(["success"=>0]); }
}


$sqlGarantias = mysqli_query($conexionBD,"SELECT * FROM cuenta_usuario");
if(mysqli_num_rows($sqlGarantias) > 0){
    $usuarios = mysqli_fetch_all($sqlGarantias,MYSQLI_ASSOC);
    echo json_encode($usuarios);
    exit();
}
else{ echo json_encode([["success"=>0]]); }
?>