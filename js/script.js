// Fonction pour allumer la calculette
function allumerCalculette() {
  document.getElementById("affichage").innerText = 0;
}

// Fonction qui permet d'éteindre la calculette
function eteindreCalculette() {
  document.getElementById("affichage").innerText = '';
}

// Fonction qui permet d'afficher le nombre en question.
function affichageNombre(nombre) {
  if (document.getElementById("affichage").innerText.charAt(0) == '0') {
    document.getElementById("affichage").innerText = nombre;
  } else {
    document.getElementById("affichage").innerText += nombre;
  }
}

// Fonction qui va effacer le texte des chiffres
function effacerTexte() {
    document.getElementById("affichage").innerText = 0;
}

// Fonction qui va afficher les operateurs
function affichageOperateur(operateur) {
  switch (operateur) {
    case '/':
      document.getElementById("affichage").innerText += "\u00F7";
      break;
    case '*':
      document.getElementById("affichage").innerText += "\u00D7";
      break;
    case '+':
      document.getElementById("affichage").innerText += "+";
      break;
    case '-':
      document.getElementById("affichage").innerText += "-";
      break;
  }
}

// Fonction pour calculer le résultat
function calculerResultat() {

    // Ingrediants
    let resultat = 0;
    let operateur = '';
    let nb1 = 0;
    let nb2 = 0;

    // On récupère le texte de la calculette pour travailler dessus.
    let texte = document.getElementById("affichage").getHTML();

    // On parcours la chaîne de caractères pour trouver l'operateur.
    for (let i=0; i < texte.length; i++) {
        if (isNaN(texte.charAt(i))) {
            operateur = texte.charAt(i);
        }
    }

    let tabNombres = texte.split(operateur);

    nb1 = parseInt(tabNombres[0]);
    nb2 = parseInt(tabNombres[1]);

    if (operateur == '+') {
        resultat = nb1 + nb2;
        document.getElementById("affichage").innerText = resultat;
        return resultat;
    } else if (operateur == '-') {
        resultat = nb1 - nb2;
        document.getElementById("affichage").innerText = resultat;
        return resultat;
    } else if (operateur == '\u00F7') {
        resultat = nb1 / nb2;
        document.getElementById("affichage").innerText = resultat;
        return resultat;
    } else if (operateur == '\u00D7') {
        resultat = nb1 * nb2;
        document.getElementById("affichage").innerText = resultat;
        return resultat;
    }
}