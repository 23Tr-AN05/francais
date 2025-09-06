<?php
$file = "donnees.json";
$data = file_exists($file) ? json_decode(file_get_contents($file), true) : [];

$input = json_decode(file_get_contents("php://input"), true);
$date = $input["date"];

if (isset($data[$date])) {
    unset($data[$date]);
    file_put_contents($file, json_encode($data, JSON_PRETTY_PRINT));
}

echo json_encode(["success" => true]);
?>
