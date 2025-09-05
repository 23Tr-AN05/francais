
<html>
 <title>Français</title>
 <head>
    <meta charset="utf-8"/>
    <link href="style.css" rel="stylesheet" type="text/css"/>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css" />
    <script src="s.js" data-import=""></script>
 </head>
 <body onload="body()">
 <center><h1 id="h1">Français</h1></center>
 <br>
 <div class="w3-container">
  
 </div>

 <div class="w3-bar w3-black">
  <button class="w3-bar-item w3-button" onclick="openCity('Ac')">Accueil</button>
  <button class="w3-bar-item w3-button" onclick="openCity('Six')">Sixième</button>
  <!--<button class="w3-bar-item w3-button" onclick="openCity('Cinq')">Cinquième</button>
  <button class="w3-bar-item w3-button" onclick="openCity('Quatre')">Quatrième</button>
  <button class="w3-bar-item w3-button" onclick="openCity('Trois')">Troisième</button>
  <button class="w3-bar-item w3-button" onclick="openCity('Seconde')">Seconde</button>-->
  <button class="w3-bar-item w3-button" onclick="openCity('Français')">Français Première-BAC</button>
  <!--<button class="w3-bar-item w3-button" onclick="openCity('Forum')">Forum</button>-->
 </div>
 <div id="Ac" class="w3-container city">
  <p id="para2">Bienvenue</p>
  <p id="para3">Je suis actuellement étudiant en deuxième année de Licence de Lettres Modernes (Français) et je me prépare également à passer les concours du professorat en 2027.<br>Sur ce site, vous trouverez des cours de Français qui peuvent vous être utiles, notamment si vous préparez le Baccalauréat. </p>
  
  <br>
   <div id="center">
       <p id="para33">Si vous avez des questions vous pouvez envoyer un<a title="Question" href="mailto:ozcelebialican2005@gmail.com?subject=J'ai une question%5BFR%5D&body=Ma%20question%20se%20porte%20sur%20le%20français%20 (ne%20changez%20pas%20l'objet%20du%20mail).">mail</a> ou me signaler<a title="Signaler une erreur" href="mailto:ozcelebialican2005@gmail.com?subject=%5BErreur%5D&body=
       (ne%20changez%20pas%20l'objet%20du%20mail).%0ADans%20l'onglet:%0ANom%20du%20fichier:%0AErreur:"> une erreur!</a> . Je vous réponderai plutôt possible par mail ou vous pouvez consulter l'onglet "forum", où je mettrais certaines questions avec leur réponse.   </p>
      <p id="para33">Si vous avez des questions vous pouvez envoyer un mail en choissisant la matière concernée. Je vous réponderai plutôt possible par mail ou vous pouvez consulter l'onglet "forum", où je mettrais certaines questions avec leur réponse. 
       <br>&nbsp;&nbsp;&nbsp;⯑ &nbsp;<a title="Question" href="mailto:ozcelebialican2005@gmail.com?subject=J'ai une question%5BMat%5D&body=Ma%20question%20se%20porte%20sur%20les%20mathématiques%20(ne%20changez%20pas%20l'objet%20du%20mail).">Mathémmatiques</a>
       <br>&nbsp;&nbsp;&nbsp;⯑&nbsp;<a title="Question" href="mailto:ozcelebialican2005@gmail.com?subject=J'ai une question%5BFR%5D&body=Ma%20question%20se%20porte%20sur%20le%20français%20 (ne%20changez%20pas%20l'objet%20du%20mail).">Français</a>
       <br>&nbsp;&nbsp;&nbsp;⯑ &nbsp;<a title="Question" href="mailto:ozcelebialican2005@gmail.com?subject=J'ai une question%5BP-C%5D&body=Ma%20question%20se%20porte%20sur%20les%20Physique-Chimie%20(ne%20changez%20pas%20l'objet%20du%20mail).">Physique-Chimie</a>
       <br> &nbsp;&nbsp;&nbsp; ‼‽ &nbsp;<a title="Signaler une erreur" href="mailto:ozcelebialican2005@gmail.com?subject=%5BErreur%5D&body=
       (ne%20changez%20pas%20l'objet%20du%20mail).%0ADans%20l'onglet:%0ANom%20du%20fichier:%0AErreur:">Je signale une erreur!</a>
     </p></div>
     <p><font style="color:red"><b>L'onglet Forum</b> est actuellement <b>vide</b>, donc l'onglet est désactivé temporairement (je l'activerai dès lors que j'aurais une question posée)</font></p>
     <p>--</p> 
    <hr>
   </div>

   
 <div id="Six" class="w3-container city" style="display:none">
   <p id="para1">Sixième</p>
   <nav>
    <button class="tablink active" onclick="openTab('cahier')">Cahier de texte</button>
    <button class="tablink" onclick="openTab('cours')">Cours</button>
    <button class="tablink" onclick="openTab('grammaire')">Grammaire</button>
    <button class="tablink" onclick="openTab('dsdm')">DS / DM</button>
  </nav>

  <div class="container">
    <div id="cahier" class="tab active">
      <h2>📅 Cahier de Texte</h2>
      <table>
        <tr>
          <th colspan="2">Choisir une date : <input type="date" id="date" /></th>
        </tr>
        <tr>
          <td><h3>✔ Ce qui a été fait</h3><p id="seance">—</p></td>
          <td><h3>📝 Devoirs à faire</h3><p id="devoirs">—</p></td>
        </tr>
      </table>
      <div class="card">
        <h3>🔑 Espace Professeur</h3>
        <input type="password" id="password" placeholder="Mot de passe" />
        <button onclick="login()">Connexion</button>
      </div>
      <div id="adminSection" class="card" style="display:none;">
        <h3>Ajouter / Modifier</h3>
        <input type="date" id="adminDate" />
        <textarea id="adminSeance" rows="3" placeholder="Ce qui a été fait"></textarea>
        <textarea id="adminDevoirs" rows="3" placeholder="Devoirs"></textarea>
        <button class="save" onclick="saveData()">💾 Enregistrer</button>
      </div>
    </div>
    <div id="cours" class="tab">
      <h2>📖 Cours</h2>
      <ul>
        <li><a href="pdf/cours1.pdf" target="_blank">Cours 1 : Introduction</a></li>
        <li><a href="pdf/cours2.pdf" target="_blank">Cours 2 : Approfondissement</a></li>
      </ul>
    </div>
    <div id="grammaire" class="tab">
      <h2>📘 Grammaire</h2>
      <ul>
        <li><a href="pdf/grammaire1.pdf" target="_blank">Grammaire : Les bases</a></li>
        <li><a href="pdf/grammaire2.pdf" target="_blank">Grammaire : Niveau avancé</a></li>
      </ul>
    </div>
    <div id="dsdm" class="tab">
      <h2>📑 DS / DM</h2>
      <ul>
        <li><a href="pdf/ds1.pdf" target="_blank">DS 1</a></li>
        <li><a href="pdf/dm1.pdf" target="_blank">DM 1</a></li>
      </ul>
    </div>
  </div>
   <hr> 
  </div>
<!--
 <div id="Cinq" class="w3-container city" style="display:none"> 
   <p id="para1">Cinquième</p>
   <p id="para3"><a href="mat/5e/Programme_5.pdf" dowload="" target="_blank"><font style="color:#0000FF;"><u> Programme de l'année</u></font> </a>et<a href="mat/5e/Edt.pdf" dowload="" target="_blank"><font style="color:#0000FF;"><u> Cahier de texte</u></font> </a></p>
   <p id="para6">📁 Chapitre 1:</p>
     <ul>
        <li><a href="mat/5e/Chp1/    " dowload="" target="_blank"><p id="para4">📄   </p></a></li>
       <li><a href="mat/5e/Chp1/    " dowload="" target="_blank"><p id="para4">📄   TD-</p></a></li>
        <li><a href="mat/5e/Chp1/    " dowload="" target="_blank"><p id="para4">📄   Correction-TD-</p></a></li>
       <li><a href="mat/5e/Chp1/    " dowload="" target="_blank"><p id="para4">📄   </p></a></li>
     </ul>
   <hr>
 </div>

 <div id="Quatre" class="w3-container city" style="display:none">
   <p id="para1">Quatrième</p>
   <p id="para3"><a href="mat/4e/Programme_4.pdf" dowload="" target="_blank"><font style="color:#0000FF;"><u> Programme de l'année</u></font></a> et<a href="mat/4e/Edt.pdf" dowload="" target="_blank"><font style="color:#0000FF;"><u> Cahier de texte</u></font></a> </p>
    <p id="para6">📁 Chapitre 1:</p>
     <ul>
        <li><a href="mat/4e/Chp1/    " dowload="" target="_blank"><p id="para4">📄   </p></a></li>
       <li><a href="mat/4e/Chp1/    " dowload="" target="_blank"><p id="para4">📄   TD-</p></a></li>
       <li><a href="mat/4e/Chp1/    " dowload="" target="_blank"><p id="para4">📄   Correction-TD-</p></a></li>
       <li><a href="mat/4e/Chp1/    " dowload="" target="_blank"><p id="para4">📄   </p></a></li>
     </ul>
   <hr>
 </div>

 <div id="Tois" class="w3-container city" style="display:none">
   <p id="para1">Troisième</p>
   <p id="para3"><a href="mat/6e/Programme_3.pdf" dowload="" target="_blank"><font style="color:#0000FF;"><u> Programme de l'année</u></font></a> et<a href="mat/3e/Edt.pdf" dowload="" target="_blank"><font style="color:#0000FF;"><u> Cahier de texte</u></font></a> </p>
   <p id="para6">📁 Chapitre 1:</p>
     <ul>
       <li><a href="mat/3e/Chp1/    " dowload="" target="_blank"><p id="para4">📄   </p></a></li>
       <li><a href="mat/3e/Chp1/    " dowload="" target="_blank"><p id="para4">📄   TD-</p></a></li>
       <li><a href="mat/3e/Chp1/    " dowload="" target="_blank"><p id="para4">📄   Correction-TD-</p></a></li>
       <li><a href="mat/3e/Chp1/    " dowload="" target="_blank"><p id="para4">📄   </p></a></li>
   </ul>
   <hr>
 </div>

 <div id="Seconde" class="w3-container city" style="display:none">
   <p id="para1">Seconde</p>
   <p id="para3"><a href="mat/2nde/Programme_2.pdf" dowload="" target="_blank"><font style="color:#0000FF;"><u> Programme de l'année</u></font>  </a>et<a href="mat/2nde/Edt.pdf" dowload="" target="_blank"><font style="color:#0000FF;"><u> Cahier de texte</u></font></a> </p>
   <p id="para6">📁 Chapitre 1:</p>
     <ul>
       <li><a href="mat/2nde/Chp1/    " dowload="" target="_blank"><p id="para4">📄   </p></a></li>
       <li><a href="mat/2nde/Chp1/    " dowload="" target="_blank"><p id="para4">📄   TD-</p></a></li>
       <li><a href="mat/2nde/Chp1/    " dowload="" target="_blank"><p id="para4">📄   Correction-TD-</p></a></li>
       <li><a href="mat/2nde/Chp1/    " dowload="" target="_blank"><p id="para4">📄   </p></a></li>
    </ul>
   <hr>
 </div>-->

 <div id="Français" class="w3-container city" style="display:none"> <div class="w3-container">
   <center><p id="para1">Français- Première - BAC</p></center>
   <div id="center">
   <p id="para33" style="border: 1px solid black; padding: 10px;"> <font style="color:#FF10FF;">⨝</font>Je vous conseille vivement utiliser <a href="https://cnrtl.fr/definition/" target="_blank"><font style="color:#0000FF;"><u>CNRTL</u></font></a>, un dictionnaire en ligne (une référence de pluparts des professeurs) ou si vous ne vous maîtrisez pas la langue française :<a href="https://www.wordreference.com/fr/" target="Fenêtre définie"><font style="color:#0000FF;"><u>WordReference</u></font></a>
   <br><font style="color:#0CF0FF;"> ⨝</font> Vous avez, dans les fichier ci-dessus, certaines questions (signalées par "¿" en début des questions).<br>Je vous invite à réfléchir à ses questions qui peuvent être très utiles pour la compréhension de certains passages ou pour une dissertation.
   <br><font style="color:#8C62F0;"> ⨝</font> Vous pouvez, si vous voulez, m'envoyer un plan de dissertation (ou rédigée toute entière) ou une explication de texte (rédigée ou pas) que vous avez faits, afin que je puisse vous donner quelques conseilles. (Cela ne serait pas une "correction" d'un professeur, bien évidement). <a title="Correction" href="mailto:ozcelebialican2005@gmail.com?subject=Dissertation ou Explication de texte%5BFR%5D&body=(ne%20changez%20pas%20l'objet%20du%20mail).%0APréciser%20le%20 Sujet%20s'il%20s'agit%20d'une%20dissertation:%0A%0AS'il%20s'agit%20d'une%20Explication d'un%20texte%20préciser%20le%20 titre%20 de %20l'œuvre%20 associée%20 et %20le %20 numéro(1,2,3,4,5):">Cliquez <font style="color:#0000FF;"><u>ici</u></font> pour envoyer votre travail. </a>
   <br><font style="color:#FF9909;">⨝ ⨝</font> S pour "Séance"</p></div>
   <p id="para4"><a href="https://www.tv5monde.com/tv/video/94520-7-jours-semaine-de-la-langue-francaise-et-de-la-francophonie">Parlons franc: Tv5Monde- 7jours, Semaine de la langue française et la francophonie (Voir à partir de 10min17s)</a></p>
   <p id="para4"><a href="https://23tr-an05.github.io/liman/">Les livres au programme de Français en <u><font style="color:#0000  FF;">langues étrangères</font></u></a></p>
   <button onclick="myFunction('Demo02')" class="w3-button w3-block w3-white w3-left-align"><p id="para2">📚- Programme officiel- Français pour  2025-2026</p></button>
     <div id="Demo02" class="w3-hide w3-container w3-light-grey">  
    <ul>
        <li><a href="fr/1re/2025-2026-G.pdf" dowload="" target="_blank"><p id="para4">Les œuvres au programme de Première Générale 2025-2026</p></a></li>
        <li><p id="para4"><a href="fr/1re/2025-2026-T.pdf" dowload="" target="_blank">Les œuvres au programme de Première Technologique 2025-2026</a></p></li> 
    </ul></div>
    <button onclick="myFunction('Demo11')" class="w3-button w3-block w3-white w3-left-align"><p id="para2">📘-Arthur RIMBAUD, <i>Cahier de Douai</i></p></button>
      <div id="Demo11" class="w3-hide w3-container w3-light-grey"> 
        <ul>
            <li><a href="fr/1re/Douai/Rimbaud-Cahier_de_Douai.pdf" dowload="" target="_blank"><p id="para4">📜   Présentation de Parcours-S1</p></a></li>
            <!--<li><a href="fr/" dowland="" target="_blank"><p id="para4">📜   Biographie de l'auteur-S2</p></a></li>-->
            <!--<li><a href="fr/" dowland="" target="_blank"><p id="para4">📜   Structure de l'œuvre-S3</p></a></li> -->
            <!--<li><a href="fr/" dowland="" target="_blank"><p id="para4">📜   Quelques citations-S4</p></a></li> -->
            <li><p id="para4">📑  Explications de texte </p><ol type="A">
                    <li><a href="fr/1re/Douai/Explication_de_texte-1-Cahier_de_Douai.pdf" dowload="" target="_blank"><p id="para4">Explication de texte 1 : Vénus Anadyomène</p></a>                  <a href="fr/1re/Douai/Explication_de_texte-1-Cahier_de_Douai-correction.pdf" dowload="" target="_blank"><p id="para4">Correction</p></a></li>
                   <li><a href="fr/1re/Douai/Explication_de_texte-2-Cahier_de_Douai.pdf" dowload="" target="_blank"><p id="para4">Explication de texte 2 :Le Mal</p></a></li>
                   <li><a href="fr/1re/Douai/Explication_de_texte-3-Cahier_de_Douai.pdf" dowload="" target="_blank"><p id="para4">Explication de texte 3 :Le Dormeur du val </p></a></li>
                   <li><a href="fr/1re/Douai/Explication_de_texte-4-Cahier_de_Douai.pdf" dowload="" target="_blank"><p id="para4">Explication de texte 4 : La Maline </p></a></li>
                   <li><a href="fr/1re/Douai/Explication_de_texte-5-Cahier_de_Douai.pdf" dowload="" target="_blank"><p id="para4">Explication de texte 5 : Rêvé pour l'hiver </p></a></li>
               </ol></li> 
        </ul>  </div> 
    <button onclick="myFunction('Demo32')" class="w3-button w3-block w3-white w3-left-align"><p id="para2">📗-Abbé Prévost, <i>Manon Lescaut</i></p></button>
      <div id="Demo32" class="w3-hide w3-container w3-light-grey"> 
          <ul>
            <li><a href="fr/1re/Lescaut/Abbé_Prevost-Manon_Lescaut.pdf" dowload="" target="_blank"><p id="para4">📜   Présentation de Parcours-S1</p></a></li>
            <!--<li><a href="fr/1re/Lescaut/ .pdf" dowload=""><p id="para4" target="_blank">📜   Présentation de l'œuvre-S2</p></a></li>
            <li><a href="fr/1re/Lescaut/Structure-Manon_Lescaut.pdf" dowload="" target="_blank"><p id="para4">📜   Structure de l'œuvre-S3 </p></a></li>-->
            <li><a href="fr/1re/Lescaut/Cit-Manon_Lescaut.pdf" dowload="" target="_blank"><p id="para4">📜   Quelques citations -S4</p></a></li>
            <li><p id="para4">📑  Explications de texte </p><ol type="A">
                   <li><a href="fr/1re/Lescaut/Explication_de_texte-1-Manon_Lescaut.pdf" dowload="" target="_blank"><p id="para4">Explication de texte 1 : Les retrouvailles au parloir de Saint-Sulpice </p></a></li>
                   <li><a href="fr/1re/Lescaut/Explication_de_texte-2-Manon_Lescaut.pdf" dowload="" target="_blank"><p id="para4">Explication de texte 2 : L'évasion de Saint-Lazar</p></a></li>
                   <li><a href="fr/1re/Lescaut/Explication_de_texte-3-Manon_Lescaut.pdf" dowload="" target="_blank"><p id="para4">Explication de texte 3 : La mort et l'enterrement de Manon</p></a></li>
                   <!--<li><a href="fr/1re" dowload="" target="_blank"><p id="para4">Explication de texte 4 :  </p></a></li>
                   <li><a href="fr/1re" dowload="" target="_blank"><p id="para4">Explication de texte 5 :  </p></a></li>-->
               </ol></li> 
         </ul> </div>
    <button onclick="myFunction('Demo31')" class="w3-button w3-block w3-white w3-left-align"><p id="para2">📗-Honoré de Balzac, <i>La Peau de chagrin</i></p></button>
      <div id="Demo31" class="w3-hide w3-container w3-light-grey">
         <ul>
            <li><a href="fr/1re/Chagrin/Honore_de_Balzac-La_Peau_de_chagrin.pdf"  dowload="" target="_blank"><p id="para4">📜  Présentation de Parcours-S1</p></a></li>
            <!--<li><a href="fr/ .pdf" dowload="" target="_blank"><p id="para4">📜   Présentation de l'œuvre-S2</p></a></li>-->
            <!--<li><a href="fr/" dowland="" target="_blank"><p id="para4">📜   Structure de l'œuvre-S3</p></a></li> -->
            <!--<li><a href="fr/" dowland="" target="_blank"><p id="para4">📜   Quelques citations-S4</p></a></li> -->
         </ul> </Div>
      <button onclick="myFunction('Demo21')" class="w3-button w3-block w3-white w3-left-align"><p id="para2">📙-Olympe de Gouges,<br> <i>La Déclaration des droits de la femme et de la citoyenne</i></p></button>
        <div id="Demo21" class="w3-hide w3-container w3-light-grey"> 
          <ul>
             <li><a href="fr/1re/DDFC/Olympes_de_Gouges-DDFC.pdf" dowload="" target="_blank"><p id="para4">📜  Présentation de Parcours-S1</p></a></li>
             <!--<li><a href="fr/ .pdf" dowload="" target="_blank"><p id="para4">Présentation de l'œuvre-2</p></a></li>-->
             <li><a href="fr/1re/DDFC/Structure-DDFC.pdf" dowload="" target="_blank"><p id="para4">📜  Structure de l'œuvre-S3 </p></a></li>
             <li><a href="fr/1re/DDFC/Cit-DDFC.pdf" dowload="" target="_blank"><p id="para4">📜Quelques citations-S4</p></a></li>
             <li><p id="para4">📑  Explications de texte </p><ol type="A">
                    <li><a href="fr/1re/DDFC/Explication_de_texte-1-DDFC.pdf" dowload="" target="_blank"><p id="para4">Explication de texte 1 : Exhortation aux hommes </p></a></li>
                   <li><a href="fr/1re/DDFC/Explication_de_texte-2-DDFC.pdf" dowload="" target="_blank"><p id="para4">Explication de texte 2 : Préambule</p></a></li>
                   <li><a href="fr/1re/DDFC/Explication_de_texte-3-DDFC.pdf" dowload="" target="_blank"><p id="para4">Explication de texte 3 : Postambule </p></a></li>
                   <li><a href="fr/1re/DDFC/Explication_de_texte-4-DDFC.pdf" dowload="" target="_blank"><p id="para4">Explication de texte 4 :  Théroigne de Méricourt, Discours prononcé à la Société fraternelle des minimes, (1792)</p></a></li>
                   <li><a href="fr/1re/DDFC/Explication_de_texte-5-DDFC.pdf" dowload="" target="_blank"><p id="para4">Explication de texte 5 : Annie Ernaux, <i>La femme gelée </i> </p></a></li>
               </ol></li> 
             <li><a href="fr" dowload="" terget="_blank"><p id="para4">Les questions de grammaire</p></a></li>
             <li> <p id="para4">Je vous ajoute un document complémentaire qui est fait pour une classe UPE2A qui reprend la contexte historique:  <a href="fr/1re/DDFC/Revolution_française.pdf" dowload="" target="_blank"><u>Révolution française</u></a>  et la       <a href="fr/1re/DDFC/fiche-R_F.pdf" dowload="" target="_blank"><u>fiche de l'activité 2</u></a> </p></li>     
         </ul>
        </div>
       <!--<button onclick="myFunction('Demo43')" class="w3-button w3-block w3-white w3-left-align"><p id="para2">📕- Pierre Corneille, <i>Le Menteur</i></p></button>
        <div id="Demo43" class="w3-hide w3-container w3-light-grey"> -->
       <p id="para2">📕- Pierre Corneille, <i>Le Menteur</i></p>
        <ul>
            <!--<li><a href="fr/ " dowland="" target="_blank"><p id="para4">📜 Théâtre Classique  -  S0 </p></a></li>-->
            <li><a href="fr/1re/Menteur/Corneille-Le_Menteur-Parcours.pdf" dowload="" target="_blank"><p id="para4">📜    Présentation de Parcours-S1</p></a></li>
            <!--<li><a href="fr/" dowland="" target="_blank"><p id="para4">📜   Biographie de l'auteur-S2</p></a></li>-->
            <!--<li><a href="fr/" dowland="" target="_blank"><p id="para4">📜   Structure de l'œuvre-S3</p></a></li> -->
            <!--<li><a href="fr/" dowland="" target="_blank"><p id="para4">📜   Quelques citations-S4</p></a></li> -->
            <!--<li><p id="para4">📑  Explications de texte </p><ol type="A">
                   <li><a href="fr/1re/Menteur/Explication_de_texte-1-Le_Menteur.pdf" dowload="" target="_blank"><p id="para4">Explication de texte 1 : Acte I, scène 3  </p></a></li>
                   <li><a href="fr/1re/Menteur/Explication_de_texte-2-Le_Menteur.pdf  " dowload="" target="_blank"><p id="para4">Explication de texte 2 :  </p></a></li>
                   <li><a href="fr/1re/Menteur/Explication_de_texte-3-Le_Menteur.pdf  " dowload="" target="_blank"><p id="para4">Explication de texte 3 :  </p></a></li>
                   <li><a href="fr/1re/Menteur/Explication_de_texte-4-Le_Menteur.pdf  " dowload="" target="_blank"><p id="para4">Explication de texte 4 :  </p></a></li>
                   <li><a href="fr/1re/Menteur/Explication_de_texte-5-Le_Menteur.pdf  " dowload="" target="_blank"><p id="para4">Explication de texte 5 :  </p></a></li>
               </ol></li> -->
        </ul> 
      <button onclick="myFunction('Demo42')" class="w3-button w3-block w3-white w3-left-align"><p id="para2">📕- Alfred de Musset, <i>On ne badine pas avec l'amour</i></p></button>
        <div id="Demo42" class="w3-hide w3-container w3-light-grey">   
         <ul>
            <li><a href="fr/1re/Amour/Musset-on_ne_badine_pas_avec_amour-Parcours.pdf   " dowload="" target="_blank"><p id="para4">📜   Présentation de Parcours-S1</p></a></li>
            <li><a href="fr/1re/Amour/Musset-on_ne_badine_pas_avec_amour-Oeuvre.pdf" dowland="" target="_blank"><p id="para4">📜  Oeuvre et personnages -S2</p></a></li>
            <li><a href="fr/1re/Amour/Structure-on_ne_badine_pas_avec_l_amour.pdf" dowland="" target="_blank"><p id="para4">📜   Structure de l'œuvre-S3</p></a></li> 
            <li><a href="fr/1re/Amour/Cit-On_ne_badine_pas_avec_l_amour.pdf" dowland="" target="_blank"><p id="para4">📜   Quelques citations-S4</p></a></li> 
            <li><p id="para4">📑  Explications de texte </p><ol type="A">
                   <li><a href="fr/1re/Amour/Explication_de_texte-1-On_ne_badine_pas_avec_l_amour.pdf" dowload="" target="_blank"><p id="para4">Explication de texte 1 : Acte I, Scène 2  </p></a></li>
                   <li><a href="fr/1re/Amour/Explication_de_texte-2-On_ne_badine_pas_avec_l_amour.pdf  " dowload="" target="_blank"><p id="para4">Explication de texte 2 : Acte II, scène 1 </p></a></li>
                   <li><a href="fr/1re/Amour/Explication_de_texte-3-On_ne_badine_pas_avec_l_amour.pdf  " dowload="" target="_blank"><p id="para4">Explication de texte 3 : Acte II, scène 5 </p></a></li>
                   <li><a href="fr/1re/Amour/Explication_de_texte-4-On_ne_badine_pas_avec_l_amour.pdf  " dowload="" target="_blank"><p id="para4">Explication de texte 4 : Acte III, scène 3  </p></a></li>
                   <li><a href="fr/1re/Amour/Explication_de_texte-5-On_ne_badine_pas_avec_l_amour.pdf  " dowload="" target="_blank"><p id="para4">Explication de texte 5 : Acte III, scène 8  </p></a></li>
            </ol></li> 
            <li><p id="para4">Voici deux quiz que j'ai touvé sur internet: </p><a href="https://www.lumni.fr/quiz/on-ne-badine-pas-avec-l-amour-d-alfred-de-musset" dowland="" target="_blank"><p id="para4"> Lumni</p></a> et <a href="http://www.toutlebacdefrancais.com/quiz/qcm-on-ne-badine-pas-avec-l-amour-de-musset/" dowland="" target="_blank"><p id="para4">Tout le bac de français.</p></a></li>
        </ul> </div>
        <!--<button onclick="myFunction('Demo41')" class="w3-button w3-block w3-white w3-left-align"><p id="para2">📕- Nathalie Sarraute, <i>Pour un oui ou pour un non</i></p></button>
        <div id="Demo41" class="w3-hide w3-container w3-light-grey"> -->  
        <p id="para2">📕- Nathalie Sarraute, <i>Pour un oui ou pour un non</i></p>
        <ul>
            <li><a href="fr/1re/oui-non/Nathalie_Sarraute-Pour_un_oui_pour_un_non-Parcours.pdf" dowload="" target="_blank"><p id="para4">📜   Présentation de Parcours-S1</p></a></li>
            <!--<li><a href="fr/" dowland="" target="_blank"><p id="para4">📜   Oeuvre et personnnages -S2</p></a></li>--
            !--<li><a href="fr/" dowland="" target="_blank"><p id="para4">📜   Structure de l'œuvre-S3</p></a></li> --
            !--<li><a href="fr/" dowland="" target="_blank"><p id="para4">📜   Quelques citations-S4</p></a></li> -->
            <li><p id="para4">📑  Explications de texte </p><ol type="A">
                   <li><a href="fr/1re/oui-non/Explication_de_texte-1-Pour_un_oui_ou_pour_un_non.pdf" dowload="" target="_blank"><p id="para4">Explication de texte 1 :  </p></a></li>
                   <!--<li><a href="fr/1re/oui-non/Explication_de_texte-2-Pour_un_oui_ou_pour_un_non.pdf" dowload="" target="_blank"><p id="para4">Explication de texte 2 :  </p></a></li>
                   <li><a href="fr/1re/oui-non/Explication_de_texte-3-Pour_un_oui_ou_pour_un_non.pdf" dowload="" target="_blank"><p id="para4">Explication de texte 3 :  </p></a></li>
                   <li><a href="fr/1re/oui-non/Explication_de_texte-4-Pour_un_oui_ou_pour_un_non.pdf" dowload="" target="_blank"><p id="para4">Explication de texte 4 :  </p></a></li>
                   <li><a href="fr/1re/oui-non/Explication_de_texte-5-Pour_un_oui_ou_pour_un_non.pdf" dowload="" target="_blank"><p id="para4">Explication de texte 5 :  </p></a></li> -->
               </ol></li>
        </ul></div>
    <!--<button onclick="myFunction('Demo21')" class="w3-button w3-block w3-white w3-left-align"><p id="para2">📙-Étienne de La Boétie,<br> <i>Discours de la servitude volontaire</i></p></button>
        <div id="Demo21" class="w3-hide w3-container w3-light-grey"> 
          <ul>
             <li><a href="fr/1re/" dowload="" target="_blank"><p id="para4">📜  Présentation de Parcours-S1</p></a></li>
             !--<li><a href="fr/ .pdf" dowload="" target="_blank"><p id="para4">Présentation de l'œuvre-2</p></a></li>--
             <li><a href="fr/1re/" dowload="" target="_blank"><p id="para4">📜  Structure de l'œuvre-S3 </p></a></li>
             <li><a href="fr/1re/" dowload="" target="_blank"><p id="para4">📜Quelques citations-S4</p></a></li>
             <li><p id="para4">📑  Explications de texte </p><ol type="A">
                    <li><a href="fr/1re/" dowload="" target="_blank"><p id="para4">Explication de texte 1 : </p></a></li>
                   <li><a href="fr/1re/" dowload="" target="_blank"><p id="para4">Explication de texte 2 : </p></a></li>
                   <li><a href="fr/1re/" dowload="" target="_blank"><p id="para4">Explication de texte 3 : </p></a></li>
                   <li><a href="fr/1re/" dowload="" target="_blank"><p id="para4">Explication de texte 4 :  </p></a></li>
                   <li><a href="fr/1re/" dowload="" target="_blank"><p id="para4">Explication de texte 5 :  </p></a></li>
               </ol></li>      
         </ul>
    </div>
   <button onclick="myFunction('Demo22')" class="w3-button w3-block w3-white w3-left-align"><p id="para2">📙-Bernard Le Bouyer de Fontenelle,<br> <i>Entretiens sur la pluralité des mondes</i></p></button>
        <div id="Demo22" class="w3-hide w3-container w3-light-grey"> 
          <ul>
             <li><a href="fr/1re/" dowload="" target="_blank"><p id="para4">📜  Présentation de Parcours-S1</p></a></li>
             !--<li><a href="fr/ .pdf" dowload="" target="_blank"><p id="para4">Présentation de l'œuvre-2</p></a></li>--
             <li><a href="fr/1re/" dowload="" target="_blank"><p id="para4">📜  Structure de l'œuvre-S3 </p></a></li>
             <li><a href="fr/1re/" dowload="" target="_blank"><p id="para4">📜Quelques citations-S4</p></a></li>
             <li><p id="para4">📑  Explications de texte </p><ol type="A">
                    <li><a href="fr/1re/" dowload="" target="_blank"><p id="para4">Explication de texte 1 : </p></a></li>
                   <li><a href="fr/1re/" dowload="" target="_blank"><p id="para4">Explication de texte 2 : </p></a></li>
                   <li><a href="fr/1re/" dowload="" target="_blank"><p id="para4">Explication de texte 3 : </p></a></li>
                   <li><a href="fr/1re/" dowload="" target="_blank"><p id="para4">Explication de texte 4 :  </p></a></li>
                   <li><a href="fr/1re/" dowload="" target="_blank"><p id="para4">Explication de texte 5 :  </p></a></li>
               </ol></li>      
         </ul>
    </div>
    <button onclick="myFunction('Demo23')" class="w3-button w3-block w3-white w3-left-align"><p id="para2">📙-Françoise de Graffigny,<br> <i>Lettres d'une Péruvienne</i></p></button>
        <div id="Demo23" class="w3-hide w3-container w3-light-grey"> 
          <ul>
             <li><a href="fr/1re/" dowload="" target="_blank"><p id="para4">📜  Présentation de Parcours-S1</p></a></li>
             !--<li><a href="fr/ .pdf" dowload="" target="_blank"><p id="para4">Présentation de l'œuvre-2</p></a></li>--
             <li><a href="fr/1re/" dowload="" target="_blank"><p id="para4">📜  Structure de l'œuvre-S3 </p></a></li>
             <li><a href="fr/1re/" dowload="" target="_blank"><p id="para4">📜Quelques citations-S4</p></a></li>
             <li><p id="para4">📑  Explications de texte </p><ol type="A">
                    <li><a href="fr/1re/" dowload="" target="_blank"><p id="para4">Explication de texte 1 : Lettre </p></a></li>
                   <li><a href="fr/1re/" dowload="" target="_blank"><p id="para4">Explication de texte 2 : Lettre </p></a></li>
                   <li><a href="fr/1re/" dowload="" target="_blank"><p id="para4">Explication de texte 3 : Lettre </p></a></li>
                   <li><a href="fr/1re/" dowload="" target="_blank"><p id="para4">Explication de texte 4 :  Lettre </p></a></li>
                   <li><a href="fr/1re/" dowload="" target="_blank"><p id="para4">Explication de texte 5 :  Lettre </p></a></li>
               </ol></li>      
         </ul>
   </div>-->
   <button onclick="myFunction('Demo01')" class="w3-button w3-block w3-white w3-left-align"><p id="para2">🗂-Sujets de dissertation</p></button>
     <div id="Demo01" class="w3-hide w3-container w3-light-grey">    
            <ul>
            <li><a href="fr/1re/Douai/Dis-Cahier_de_Douai.pdf" dowland="" target="_blank"><p id="para4">🖋️Arthur RIMBAUD, <i> Cahier de Douai</i></p></a></li>
            <li><a href="fr/1re/Chagrin/Dis-Peau_de_chagrin.pdf" dowland="" target="_blank"><p id="para4">🖋️Honoré de Balzac, <i>La Peau de chagrin</i></p></a> </li>
            <li><a href="fr/1re/Lescaut/Dis-Manon_Lescaut.pdf" dowland="" target="_blank"><p id="para4">🖋️Abbé Prévost, <i>Manon Lescaut </i></p></a> </li>
            <li><a href="fr/1re/DDFC/Dis-DDFC.pdf" dowland="" target="_blank"><p id="para4">🖋️Olympe de Gouges, <i>Déclaration des droits de la femme et de la citoyenne </i></p></a> </li>
            <li><a href="fr/1re/Amour/Dis-On_ne_badine_pas_avec_l_amour.pdf" target="_blank"><p id="para4">🖋️Alfred de Musset, <i>On ne badine pas avec l'amour </i></p></a> </li>
            <li><a href="fr/1re/Menteur/Dis-Le_Menteur.pdf" target="_blank"><p id="para4">🖋️Corneille, <i>Le Menteur  </i></p></a> </li>
            <li><a href="fr/1re/oui-non/Dis-Pour_un_oui_ou_pour_un_non.pdf" target="_blank"><p id="para4">🖋️Nathalie Sarraute, <i>Pour un oui ou pour un non </i></p></a> </li>
            <li><a href="fr/1re/sujet-de-BAC-2024.pdf" dowland="" target="_blank"><p id="para4">📝Sujets de Bac  de l'épreuve de 2024 </p></a> </li>
         </ul>
      </div>
      <button onclick="myFunction('Demo03')" class="w3-button w3-block w3-white w3-left-align"><p id="para2">🗂-Boîte à outils</p></button>
     <div id="Demo03" class="w3-hide w3-container w3-light-grey">    
            <ul>
            <li><a href="fr/1re/bao/Figures_de_style.pdf" dowland="" target="_blank"><p id="para4">📝   Figures de sytle </p></a> </li>
            <li><a href="fr/1re/bao/vocabulaire-de-theatre.pdf" dowland="" target="_blank"><p id="para4">📝   Vocabulaire de théâtre </p></a> </li>
            <!--<li><a href="fr/divers/mot_sens_changé.pdf" dowland="" target="_blank"><p id="para4">📝   Vocabulaire poètique </p></a> </li>-->
         </ul>
      </div>
      <!--<button onclick="myFunction('Demo04)" class="w3-button w3-block w3-white w3-left-align"><p id="para2">🗂-Méthodologie de BAC</p></button>
     <div id="Demo04" class="w3-hide w3-container w3-light-grey">    
            <ul>
            <li><a href="fr/1re/methodo/" dowland="" target="_blank"><p id="para4">📝Méthodologie de <b>Dissertation</b </p></a> </li>
            <li><a href="fr/divers/mot_sens_changé.pdf" dowland="" target="_blank"><p id="para4">📝Méthodologie de <b>Commentaire</b </p></a> </li>
            <li><a href="fr/divers/mot_sens_changé.pdf" dowland="" target="_blank"><p id="para4">📝Méthodologie de <b>Essai</b </p></a> </li>
            <li><a href="fr/divers/mot_sens_changé.pdf" dowland="" target="_blank"><p id="para4">📝Méthodologie de <b>Contraction</b </p></a> </li>
         </ul>
      </div>-->
    <button onclick="myFunction('Demo05')" class="w3-button w3-block w3-white w3-left-align"><p id="para2">🗂-Divers sur la Langue Française</p></button>
     <div id="Demo05" class="w3-hide w3-container w3-light-grey">    
            <ul>
            <li><a href="fr/divers/mot_sens_changé.pdf" dowland="" target="_blank"><p id="para4">📝Quelques mots qui ont vu leur sens changé </p></a> </li>
         </ul>
      </div>
    <hr>
 </div></div>


 <!--<div id="Forum" class="w3-container city" style="display:none">
  <p id="para2">-</p>
  <p>--</p> 
  <hr>
 </div>-->


 <!--hyperlien 
 <a href="fr/                    .pdf" dowload="" target="_blank">   #Français
 <a href="mat/                  .pdf" dowload="" target="_blank">       #Mathématiques 
 -->
 <!--code Demo- Première - 
 0 -  autres 
 1- poèsie 
 2-littérature d'idées
 3- roman
 4- théâtre

 
 -->

 <!--🗂📙📗📘📚📕📔📒📝💻📓🖋️-->

 <script>
 function openCity(cityName) {
  var i;
  var x = document.getElementsByClassName("city");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  document.getElementById(cityName).style.display = "block";  
 }
 </script>
  <script>
 function myFunction(id) {
  var x = document.getElementById(id);
  if (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show";
    x.previousElementSibling.className = 
    x.previousElementSibling.className.replace("w3-white", "w3-yellow");
  } else { 
    x.className = x.className.replace(" w3-show", "");
    x.previousElementSibling.className = 
    x.previousElementSibling.className.replace("w3-yellow", "w3-white");
  }
 }
 </script>
   <script>
 function myFunction(id) {
  var x = document.getElementById(id);
  if (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show";
    x.previousElementSibling.className = 
    x.previousElementSibling.className.replace("w3-white", "w3-yellow");
  } else { 
    x.className = x.className.replace(" w3-show", "");
    x.previousElementSibling.className = 
    x.previousElementSibling.className.replace("w3-yellow", "w3-white");
  }
 }
 </script>
 <script>
    function openCity(cityName) {
      document.querySelectorAll(".city").forEach(c => c.style.display = "none");
      document.getElementById(cityName).style.display = "block";
    }

    function openTab(tabName, event) {
      document.querySelectorAll(".tab").forEach(t => t.classList.remove("active"));
      document.querySelectorAll(".tablink").forEach(b => b.classList.remove("active"));
      document.getElementById(tabName).classList.add("active");
      event.target.classList.add("active");
    }

    function login() {
      const pwd = document.getElementById("password").value;
      if (pwd === "prof123") {
        document.getElementById("adminSection").style.display = "block";
        alert("Connexion réussie !");
      } else {
        alert("Mot de passe incorrect !");
      }
    }

    async function chargerDevoirs(date) {
      const response = await fetch("devoirs.json?cache=" + Date.now());
      const donnees = await response.json();
      if (donnees[date]) {
        document.getElementById("seance").textContent = donnees[date].seance;
        document.getElementById("devoirs").textContent = donnees[date].devoirs;
      } else {
        document.getElementById("seance").textContent = "Pas de séance enregistrée.";
        document.getElementById("devoirs").textContent = "Pas de devoirs enregistrés.";
      }
    }

   function saveData() {
    const d = document.getElementById('adminDate').value;
    const dv = document.getElementById('adminDevoirs').value;
    const sc = document.getElementById('adminSeance').value;
  
   fetch("save.php", {
     method: "POST",
     headers: { "Content-Type": "application/json" },
     body: JSON.stringify({ date: d, devoirs: dv, seance: sc })
   })
   .then(r => r.text())
   .then(msg => alert(msg));
  }
  </script>