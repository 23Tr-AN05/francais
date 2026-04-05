// ========== CHARGEMENT DYNAMIQUE DES PAGES ==========
const pageCache = {};

async function loadPage(pageName) {
    const container = document.getElementById('page-container');
    if (!container) return;

    // Si la page est déjà en cache
    if (pageCache[pageName]) {
        container.innerHTML = pageCache[pageName];
        updateActiveNav(pageName);
        initPageScripts(pageName);
        return;
    }

    let htmlContent = '';

    // Pages spéciales avec contenu intégré (pour éviter des fichiers externes manquants)
    if (pageName === 'accueil') {
        htmlContent = getAccueilHTML();
    } else if (pageName === 'six') {
        htmlContent = getSixiemeHTML();
    } else if (pageName === 'premiere') {
        htmlContent = getPremiereHTML();
    } else {
        // Tentative de chargement externe (si vous ajoutez d'autres pages)
        try {
            const response = await fetch(`${pageName}.html`);
            if (!response.ok) throw new Error('Page non trouvée');
            htmlContent = await response.text();
        } catch (error) {
            console.error('Erreur:', error);
            htmlContent = `<div class="container"><p style="color:red;">Erreur : page "${pageName}" introuvable.</p></div>`;
        }
    }

    pageCache[pageName] = htmlContent;
    container.innerHTML = htmlContent;
    updateActiveNav(pageName);
    initPageScripts(pageName);
}

function updateActiveNav(pageName) {
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.classList.remove('active-nav');
    });
    const activeBtn = document.getElementById(`nav-${pageName}`);
    if (activeBtn) activeBtn.classList.add('active-nav');
}

function initPageScripts(pageName) {
    if (pageName === 'accueil') {
        loadImportantInfo();
        loadCitation();
        renderCalendar();
    } else if (pageName === 'six') {
        initSixiemeTabs();
    } else if (pageName === 'premiere') {
        initPremiereAccordion();
    }
    initPdfToast(); // commun à toutes les pages
}

// ========== STRUCTURE HTML DES PAGES ==========
function getAccueilHTML() {
    return `
    <div id="accueil" class="page active-page">
        <div class="container">
            <div class="hero">
                <h1>📖 Français : réussir du collège au bac</h1>
                <p>Cours, exercices et méthodes par un étudiant en Lettres Modernes, futur professeur.</p>
            </div>
            <div class="two-columns">
                <div class="col-left">
                    <div class="info-box">
                        <h3><i class="fas fa-info-circle"></i> Informations importantes</h3>
                        <div id="info-content" class="info-content">Chargement...</div>
                    </div>
                </div>
                <div class="col-right">
                    <div class="calendar-box">
                        <h3><i class="fas fa-calendar-alt"></i> Calendrier</h3>
                        <div id="calendar"></div>
                    </div>
                </div>
            </div>
            <div id="citation-block" class="citation-container">
                <div class="citation-icon"><i class="fas fa-quote-left"></i></div>
                <div class="citation-content">
                    <p id="citation-texte" class="citation-texte">Chargement...</p>
                    <p id="citation-auteur" class="citation-auteur"></p>
                </div>
            </div>
            <div class="cards-grid">
                <div class="info-card">
                    <i class="fas fa-envelope"></i>
                    <h3>Une question ?</h3>
                    <p><a href="mailto:ozcelebialican2005@gmail.com">Envoyez-moi un mail</a></p>
                </div>
                <div class="info-card">
                    <i class="fas fa-bug"></i>
                    <h3>Une erreur ?</h3>
                    <p><a href="mailto:ozcelebialican2005@gmail.com">Signalez-la ici</a></p>
                </div>
            </div>
        </div>
    </div>`;
}

function getSixiemeHTML() {
    return `
    <div id="six" class="page">
        <div class="container">
            <h2>Cours de Sixième</h2>
            <div class="tabs">
                <button class="tab-btn active" data-tab="grammaire">Grammaire</button>
                <button class="tab-btn" data-tab="conjugaison">Conjugaison</button>
                <button class="tab-btn" data-tab="vocabulaire">Vocabulaire</button>
            </div>
            <div id="grammaire" class="tab-content active">
                <p>Contenu de grammaire 6ème...</p>
            </div>
            <div id="conjugaison" class="tab-content">
                <p>Contenu de conjugaison 6ème...</p>
            </div>
            <div id="vocabulaire" class="tab-content">
                <p>Contenu de vocabulaire 6ème...</p>
            </div>
        </div>
    </div>`;
}

function getPremiereHTML() {
    return `
    <div id="premiere" class="page">
        <div class="container">
            <h2>Cours de Première (BAC)</h2>
            <div class="accordion">
                <div class="accordion-item">
                    <button class="accordion-btn">📖 Objet d'étude : La poésie</button>
                    <div class="accordion-content">Contenu poésie Première...</div>
                </div>
                <div class="accordion-item">
                    <button class="accordion-btn">🎭 Le théâtre</button>
                    <div class="accordion-content">Contenu théâtre Première...</div>
                </div>
                <div class="accordion-item">
                    <button class="accordion-btn">✍️ La dissertation</button>
                    <div class="accordion-content">Méthodologie de la dissertation...</div>
                </div>
            </div>
        </div>
    </div>`;
}

// ========== ACCUEIL : informations, citations, calendrier ==========
async function loadImportantInfo() {
    const infoDiv = document.getElementById('info-content');
    if (!infoDiv) return;
    try {
        const response = await fetch('info.json');
        if (!response.ok) throw new Error();
        const info = await response.json();
        if (info.active && info.message) {
            infoDiv.innerHTML = `<i class="fas fa-info-circle"></i> ${info.message}`;
        } else {
            infoDiv.innerHTML = '<span class="info-empty">Pas d\'information importante</span>';
        }
    } catch {
        infoDiv.innerHTML = '<span class="info-empty">Pas d\'information importante</span>';
    }
}

let citationInterval = null;
let citationsList = [];

async function loadCitation() {
    const texteEl = document.getElementById('citation-texte');
    const auteurEl = document.getElementById('citation-auteur');
    if (!texteEl || !auteurEl) return;

    try {
        const response = await fetch('citation.json');
        if (!response.ok) throw new Error();
        const data = await response.json();
        if (data.active && data.citations) {
            citationsList = data.citations;
            displayRandomCitation();
            if (citationInterval) clearInterval(citationInterval);
            citationInterval = setInterval(displayRandomCitation, 25000);
        } else {
            throw new Error();
        }
    } catch {
        texteEl.innerText = '« La langue française est une femme... »';
        auteurEl.innerHTML = '— Paul Claudel';
    }
}

function displayRandomCitation() {
    if (citationsList.length === 0) return;
    const randomIndex = Math.floor(Math.random() * citationsList.length);
    const citation = citationsList[randomIndex];
    const texteEl = document.getElementById('citation-texte');
    const auteurEl = document.getElementById('citation-auteur');
    if (texteEl && auteurEl) {
        texteEl.innerText = citation.texte;
        auteurEl.innerHTML = `— ${citation.auteur}`;
    }
}

let currentDate = new Date();

function renderCalendar() {
    const calendarDiv = document.getElementById('calendar');
    if (!calendarDiv) return;
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    let startOffset = firstDay.getDay() === 0 ? 6 : firstDay.getDay() - 1;
    const today = new Date();

    let html = `<div class="calendar-header">
        <button onclick="previousMonth()"><i class="fas fa-chevron-left"></i></button>
        <h4>${getMonthName(month)} ${year}</h4>
        <button onclick="nextMonth()"><i class="fas fa-chevron-right"></i></button>
    </div>
    <div class="calendar-weekdays">
        <div class="calendar-weekday">Lun</div><div class="calendar-weekday">Mar</div>
        <div class="calendar-weekday">Mer</div><div class="calendar-weekday">Jeu</div>
        <div class="calendar-weekday">Ven</div><div class="calendar-weekday">Sam</div>
        <div class="calendar-weekday">Dim</div>
    </div><div class="calendar-days">`;

    const prevMonthDate = new Date(year, month, 0);
    const daysInPrevMonth = prevMonthDate.getDate();
    for (let i = 0; i < startOffset; i++) {
        html += `<div class="calendar-day other-month">${daysInPrevMonth - startOffset + i + 1}</div>`;
    }
    for (let day = 1; day <= daysInMonth; day++) {
        const isToday = (day === today.getDate() && month === today.getMonth() && year === today.getFullYear());
        html += `<div class="calendar-day ${isToday ? 'today' : ''}">${day}</div>`;
    }
    const totalDisplayed = startOffset + daysInMonth;
    for (let day = 1; day <= 42 - totalDisplayed; day++) {
        html += `<div class="calendar-day other-month">${day}</div>`;
    }
    html += `</div>`;
    calendarDiv.innerHTML = html;
}

function getMonthName(month) {
    return ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'][month];
}

function previousMonth() { currentDate.setMonth(currentDate.getMonth() - 1); renderCalendar(); }
function nextMonth() { currentDate.setMonth(currentDate.getMonth() + 1); renderCalendar(); }

// ========== SIXIÈME : onglets ==========
function initSixiemeTabs() {
    const tabBtns = document.querySelectorAll('#six .tab-btn');
    const tabContents = document.querySelectorAll('#six .tab-content');
    if (!tabBtns.length) return;

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const tabId = btn.getAttribute('data-tab');
            tabBtns.forEach(b => b.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));
            btn.classList.add('active');
            const activeContent = document.getElementById(tabId);
            if (activeContent) activeContent.classList.add('active');
        });
    });
}

// ========== PREMIÈRE : accordéon ==========
function initPremiereAccordion() {
    const btns = document.querySelectorAll('#premiere .accordion-btn');
    if (!btns.length) return;

    btns.forEach(btn => {
        btn.addEventListener('click', () => {
            const content = btn.nextElementSibling;
            // Ferme tous les autres
            document.querySelectorAll('#premiere .accordion-content').forEach(c => {
                if (c !== content) c.classList.remove('active');
            });
            content.classList.toggle('active');
        });
    });
}

// ========== PDF TOAST (notification pour liens PDF) ==========
function initPdfToast() {
    document.querySelectorAll('a[href$=".pdf"]').forEach(link => {
        // Évite les doublons d'écouteurs
        if (link.hasAttribute('data-toast-initialized')) return;
        link.setAttribute('data-toast-initialized', 'true');
        link.addEventListener('click', (e) => {
            const toast = document.createElement('div');
            toast.textContent = '📄 Ouverture du PDF...';
            toast.style.cssText = 'position:fixed;bottom:20px;left:50%;transform:translateX(-50%);background:#2c3e2f;color:white;padding:8px 16px;border-radius:40px;z-index:9999;opacity:0;transition:0.3s';
            document.body.appendChild(toast);
            setTimeout(() => toast.style.opacity = '1', 10);
            setTimeout(() => toast.remove(), 1500);
        });
    });
}

// ========== INITIALISATION ==========
document.addEventListener('DOMContentLoaded', () => {
    loadPage('accueil');
});