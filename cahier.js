// === CONFIGURATION GITHUB ===
const GITHUB_USER = "23Tr-AN05";   // Remplace par ton nom GitHub
const REPO = "francais ";             // Remplace par ton repo
const BRANCH = "main";               // Branche utilisée
const FILE_PATH = "donnees.json";    // Fichier JSON
const TOKEN = "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"; // Ton token GitHub

// === FONCTIONS GÉNÉRIQUES ===

// Lire les données depuis GitHub
async function getData() {
  const res = await fetch(`https://api.github.com/repos/${GITHUB_USER}/${REPO}/contents/${FILE_PATH}?ref=${BRANCH}`);
  const json = await res.json();
  const content = atob(json.content); // décoder Base64
  return { sha: json.sha, data: JSON.parse(content) };
}

// Sauvegarder les données sur GitHub
async function saveDataToGitHub(newData) {
  const { sha } = await getData();
  await fetch(`https://api.github.com/repos/${GITHUB_USER}/${REPO}/contents/${FILE_PATH}`, {
    method: "PUT",
    headers: {
      "Authorization": `token ${TOKEN}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      message: "Mise à jour cahier de texte",
      content: btoa(JSON.stringify(newData, null, 2)),
      sha: sha,
      branch: BRANCH
    })
  });
}

// === FONCTIONNALITÉS CAHIER DE TEXTE ===

// Connexion professeur
function login() {
  const pwd = document.getElementById("password").value;
  if (pwd === "prof123") {
    document.getElementById("adminSection").style.display = "block";
    renderList();
    alert("Connexion réussie !");
  } else {
    alert("Mot de passe incorrect !");
  }
}

// Ajouter ou modifier une donnée
async function saveData() {
  const date = document.getElementById("adminDate").value;
  const seance = document.getElementById("adminSeance").value;
  const devoirs = document.getElementById("adminDevoirs").value;

  if (!date) { alert("Choisis une date !"); return; }

  const { data } = await getData();
  data[date] = { seance, devoirs };
  await saveDataToGitHub(data);
  alert("Données enregistrées !");
  renderList();
}

// Supprimer une donnée
async function deleteData(date) {
  const { data } = await getData();
  delete data[date];
  await saveDataToGitHub(data);
  alert("Donnée supprimée !");
  renderList();
}

// Modifier = charger dans le formulaire
async function editData(date) {
  const { data } = await getData();
  if (data[date]) {
    document.getElementById("adminDate").value = date;
    document.getElementById("adminSeance").value = data[date].seance;
    document.getElementById("adminDevoirs").value = data[date].devoirs;
  }
}

// Afficher la liste côté professeur
async function renderList() {
  const { data } = await getData();
  let div = document.getElementById("dataList");
  if (!div) {
    div = document.createElement("div");
    div.id = "dataList";
    document.getElementById("adminSection").appendChild(div);
  }

  div.innerHTML = "<h3>📋 Liste des entrées</h3>";
  const dates = Object.keys(data).sort();
  if (dates.length === 0) {
    div.innerHTML += "<p>Aucune donnée enregistrée.</p>";
    return;
  }

  dates.forEach(date => {
    const entry = data[date];
    const item = document.createElement("div");
    item.style.border = "1px solid #ccc";
    item.style.padding = "5px";
    item.style.margin = "5px 0";
    item.innerHTML = `
      <strong>${date}</strong><br>
      ✔ ${entry.seance || "—"}<br>
      📝 ${entry.devoirs || "—"}<br>
      <button onclick="editData('${date}')">✏️ Modifier</button>
      <button onclick="deleteData('${date}')">🗑️ Supprimer</button>
    `;
    div.appendChild(item);
  });
}

// Afficher côté élève
document.getElementById("date").addEventListener("change", async function() {
  const { data } = await getData();
  const d = this.value;
  if (data[d]) {
    document.getElementById("seance").textContent = data[d].seance;
    document.getElementById("devoirs").textContent = data[d].devoirs;
  } else {
    document.getElementById("seance").textContent = "—";
    document.getElementById("devoirs").textContent = "—";
  }
});
