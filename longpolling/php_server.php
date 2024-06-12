<?php

    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: GET, POST');


//    $request_data = $_GET;
//    echo json_encode($request_data);

$client_time = $_GET['lastmod'];

$file_time = filemtime('mycv.txt');

//echo json_encode(['clienttime'=>$client_time,
//    'filetime'=>$file_time]);

// keep request freezed until change detected in file ?

while ($client_time >= $file_time) {
    sleep(1);
    clearstatcache();
    $file_time = filemtime('mycv.txt');
}


$file_content = file_get_contents('mycv.txt');
$message = [
    'data'=>$file_content,
    'filetime'=>$file_time,
];
echo json_encode($message);


# implement real time using asynchronous ajax  http-> polling --- /// not the best for handling such issue

### replace long polling with sockets ==> ws web sockets