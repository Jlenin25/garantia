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

    $sqlGarantias = mysqli_query($conexionBD,"SELECT * FROM usuario WHERE id_rol = 2");
    if(mysqli_num_rows($sqlGarantias) > 0){
        $data[4] = mysqli_fetch_all($sqlGarantias,MYSQLI_ASSOC);
    }

    else{ $data[4] = 0; }
    echo json_encode($data);
    exit();
}

if (isset($_GET["listarrevisiones"])) {
    $sqlGarantias = mysqli_query($conexionBD,"CALL LISTARREVISION()");
    if(mysqli_num_rows($sqlGarantias) > 0){
        $revisiones = mysqli_fetch_all($sqlGarantias,MYSQLI_ASSOC);
        echo json_encode($revisiones);
        exit();
    }
    else{ echo json_encode([["success"=>0]]); }
}

if (isset($_GET["listarpedidos"])) {
    $sqlGarantias = mysqli_query($conexionBD,"CALL LISTARPEDIDOS()");
    if(mysqli_num_rows($sqlGarantias) > 0){
        $pedidos = mysqli_fetch_all($sqlGarantias,MYSQLI_ASSOC);
        echo json_encode($pedidos);
        exit();
    }
    else{ echo json_encode([["success"=>0]]); }
}

if (isset($_GET["listargarantias"])) {
    $sqlGarantias = mysqli_query($conexionBD,"CALL LISTARGARANTIAS()");
    if(mysqli_num_rows($sqlGarantias) > 0){
        $revisiones = mysqli_fetch_all($sqlGarantias,MYSQLI_ASSOC);
        echo json_encode($revisiones);
        exit();
    }
    else{ echo json_encode([["success"=>0]]); }
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

if (isset($_GET["editarrevisiones"])) {
    $data = json_decode(file_get_contents("php://input"));

    $idRevision = $data->idRevision;
    $idProducto = $data->idProducto;
    $idUsuario = $data->idUsuario;
    $descripcion = $data->descripcion;

    $sqlGarantias = mysqli_query($conexionBD,"CALL EDITARREVISION('$idRevision', '$idProducto', '$idUsuario', '$descripcion')");
    echo json_encode($data);
    exit();
}
?>