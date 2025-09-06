<?php
// Fichier JSON où les données seront stockées
$file = "donnees.json";

// Lire les données existantes
$data = file_exists($file) ? json_decode(file_get_contents($file), true) : [];

// Récupérer ce qui vient du JS
$input = json_decode(file_get_contents("php://input"), true);
$date = $input["date"];
$seance = $input["seance"];
$devoirs = $input["devoirs"];

// Sauvegarder
$data[$date] = ["seance" => $seance, "devoirs" => $devoirs];

// Réécrire le fichier
file_put_contents($file, json_encode($data, JSON_PRETTY_PRINT));

// Répondre au JS
echo json_encode(["success" => true]);
?>
