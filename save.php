<?php
$file = "devoirs.json";

// Charger JSON existant
if (file_exists($file)) {
    $data = json_decode(file_get_contents($file), true);
} else {
    $data = [];
}

// Lire données envoyées
$input = json_decode(file_get_contents("php://input"), true);
$date = $input["date"];
$devoirs = $input["devoirs"];
$seance = $input["seance"];

// Ajouter/modifier
$data[$date] = ["devoirs" => $devoirs, "seance" => $seance];

// Sauvegarder dans JSON
file_put_contents($file, json_encode($data, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE));

echo "Devoirs enregistrés pour $date ✅";
?>
