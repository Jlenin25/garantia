<?php

include '../../db/conex.php';

if (isset($_GET["dashboardcantidades"])) {

    $sqlGarantias = mysqli_query($conexionBD,"SELECT COUNT(*) FROM pedido");
    if(mysqli_num_rows($sqlGarantias) > 0){
        $data[0] = mysqli_fetch_all($sqlGarantias,MYSQLI_ASSOC);
    }
    else{ $data[0] = 0; }

    $sqlGarantias = mysqli_query($conexionBD,"SELECT COUNT(*) FROM garantia");
    if(mysqli_num_rows($sqlGarantias) > 0){
        $data[1] = mysqli_fetch_all($sqlGarantias,MYSQLI_ASSOC);
    }
    else{ $data[1] = 0; }

    $sqlGarantias = mysqli_query($conexionBD,"SELECT COUNT(*) FROM producto");
    if(mysqli_num_rows($sqlGarantias) > 0){
        $data[2] = mysqli_fetch_all($sqlGarantias,MYSQLI_ASSOC);
    }
    else{ $data[2] = 0; }

    $sqlGarantias = mysqli_query($conexionBD,"SELECT COUNT(*) FROM revisión");
    if(mysqli_num_rows($sqlGarantias) > 0){
        $data[3] = mysqli_fetch_all($sqlGarantias,MYSQLI_ASSOC);
    }
    else{ $data[3] = 0; }
    echo json_encode($data);
    exit();
}

if (isset($_GET["reportes"])) {

    $sqlGarantias = mysqli_query($conexionBD,"SELECT * FROM pedido");
    if(mysqli_num_rows($sqlGarantias) > 0){
        $data[0] = mysqli_fetch_all($sqlGarantias,MYSQLI_ASSOC);
    }
    else{ $data[0] = 0; }

    $sqlGarantias = mysqli_query($conexionBD,"SELECT * FROM garantia");
    if(mysqli_num_rows($sqlGarantias) > 0){
        $data[1] = mysqli_fetch_all($sqlGarantias,MYSQLI_ASSOC);
    }
    else{ $data[1] = 0; }

    $sqlGarantias = mysqli_query($conexionBD,"SELECT * FROM producto");
    if(mysqli_num_rows($sqlGarantias) > 0){
        $data[2] = mysqli_fetch_all($sqlGarantias,MYSQLI_ASSOC);
    }
    else{ $data[2] = 0; }

    $sqlGarantias = mysqli_query($conexionBD,"SELECT * FROM revisión");
    if(mysqli_num_rows($sqlGarantias) > 0){
        $data[3] = mysqli_fetch_all($sqlGarantias,MYSQLI_ASSOC);
    }
    else{ $data[3] = 0; }
    echo json_encode($data);
    exit();
}



if (isset($_GET["listarproductos"])) {
    $sqlGarantias = mysqli_query($conexionBD,"CALL LISTARPRODUCTOS()");
    if(mysqli_num_rows($sqlGarantias) > 0){
        $productos = mysqli_fetch_all($sqlGarantias,MYSQLI_ASSOC);
        echo json_encode($productos);
        exit();
    }
    else{ echo json_encode([["success"=>0]]); }
}
?>