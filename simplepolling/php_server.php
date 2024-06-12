<?php

    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: GET, POST');


//    $request_data = $_GET;
//    echo json_encode($request_data);

# to read file
$data = file_get_contents('mycv.txt');

echo json_encode(['data'=>$data]);