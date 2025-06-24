// Fonction pour allumer la calculette
function allumerCalculette() {
  document.getElementById("affichage").innerText = 0;
}

// Fonction qui permet d'éteindre la calculette
function eteindreCalculette() {
  document.getElementById("affichage").innerText = "";
}

// Fonction qui permet d'afficher le nombre en question.
function affichageNombre(nombre) {
  if (document.getElementById("affichage").innerText == "") {
    console.log("La calculette est éteinte ! :)");
  } else {
    if (document.getElementById("affichage").innerText.charAt(0) == "0") {
      document.getElementById("affichage").innerText = nombre;
    } else {
      document.getElementById("affichage").innerText += nombre;
    }
  }
}

// Fonction qui va effacer le texte des chiffres
function effacerTexte() {
  document.getElementById("affichage").innerText = 0;
}

// Fonction pour le bouton C qui permet d'effacer un caractère
function effacerCaractere() {
  let texte = document.getElementById("affichage").getHTML();
  if (texte.length == 1) {
    document.getElementById("affichage").innerText = 0;
  } else {
    let tabCaracteres = texte.split("");
    tabCaracteres.pop();
    texte = tabCaracteres.join("");
    document.getElementById("affichage").innerText = texte;
  }
}

// Fonction qui va afficher les operateurs
function affichageOperateur(operateur) {
  if (document.getElementById("affichage").innerText == "") {
    console.log("La calculette est éteinte ! :)");
  } else {
    switch (operateur) {
      case "/":
        document.getElementById("affichage").innerText += "\u00F7";
        break;
      case "*":
        document.getElementById("affichage").innerText += "\u00D7";
        break;
      case "+":
        document.getElementById("affichage").innerText += "+";
        break;
      case "-":
        document.getElementById("affichage").innerText += "-";
        break;
      case ".":
        document.getElementById("affichage").innerText += ".";
        break;
    }
  }
}

// Fonction pour calculer le résultat
function calculerResultat() {
  // Ingrediants
  let resultat = 0;
  let operateur = "";
  let operateurPoint = ".";
  let nb1 = 0;
  let nb2 = 0;

  // On récupère le texte de la calculette pour travailler dessus.
  let texte = document.getElementById("affichage").getHTML();

  // On parcours la chaîne de caractères pour trouver l'operateur.
  for (let i = 0; i < texte.length; i++) {
    if (isNaN(texte.charAt(i)) && texte.charAt(i) != ".") {
      operateur = texte.charAt(i);
      console.log(operateur);
    }
  }

  let tabNombres = texte.split(operateur);
  // let tabNombresFloat = texte.split(operateurPoint);

  nb1 = parseFloat(tabNombres[0]);
  nb2 = parseFloat(tabNombres[1]);

  console.log(nb1);
  console.log(nb2);

  nb1.toString();
  nb2.toString();

  for (let i=0; i < nb1.length; i++) {
    if (operateurPoint == "") {
      parseInt(nb1);
    }
  }

  for (let i=0; i < nb2.length; i++) {
    if (operateurPoint == "") {
      parseInt(nb2);
    }
  }

  console.log(nb1);
  console.log(nb2);

  if (operateur == "+") {
    resultat = nb1 + nb2;
    document.getElementById("affichage").innerText = resultat;
    return resultat;
  } else if (operateur == "-") {
    resultat = nb1 - nb2;
    document.getElementById("affichage").innerText = resultat;
    return resultat;
  } else if (operateur == "\u00F7") {
    resultat = nb1 / nb2;
    if (nb2 == 0) {
      console.log("Impossible de diviser par 0 ! ):");
    } else {
      document.getElementById("affichage").innerText = resultat;
      return resultat;
    }
  } else if (operateur == "\u00D7") {
    resultat = nb1 * nb2;
    document.getElementById("affichage").innerText = resultat;
    return resultat;
  }
}
