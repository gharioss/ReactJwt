<?php

require '../validate_jwt.php';
require 'db.php';


header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");



if ($signatureValid && !$tokenExpired) {
    $id_user = json_decode($payload)->id_user;
    $stmt = $pdo->query("SELECT * FROM users WHERE id_user = $id_user");
    $fetch = $stmt->fetch();

    echo json_encode($fetch);
} else {
    echo json_encode("Something went wront");
}
