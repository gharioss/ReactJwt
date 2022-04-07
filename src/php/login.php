<?php
require 'db.php';
require '../generate_jwt.php';
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");


$postdata = file_get_contents("php://input");

if (isset($postdata) && !empty($postdata)) {
    $decoded = json_decode($postdata);

    $email = $decoded->email;
    $password = $decoded->password;


    $sql = $pdo->prepare("SELECT * FROM users WHERE email = :email AND password = :password");
    $sql->bindParam(":email", $email);
    $sql->bindParam(":password", $password);
    $sql->execute();
    $getId = $sql->fetch();

    if ($sql) {
        $token = JWT($getId["id_user"], $getId['email']);
        echo json_encode($token);
    } else {
        print_r('it didnt work');
    }
}
