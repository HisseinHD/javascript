/******************************* 
    LES BASES DU JAVASCRIPT
*******************************/

// =========================================
// a. LES COMMENTAIRES
// =========================================

// Ceci est un commentaire sur une seule ligne

/*
  Ceci est un commentaire
  sur plusieurs lignes
*/

// =========================================
// b. LES VARIABLES (let, const)
// =========================================

let age = 25; // Variable modifiable
const PI = 3.14; // Constante (non modifiable)

age = 30; // OK : let permet la modification
// PI = 3.1416; // Erreur : const ne peut pas être modifiée

console.log("Âge :", age); // Affiche 30
console.log("PI :", PI); // Affiche 3.14

// =========================================
// c. VARIABLE GLOBALE (sans let/const)
// =========================================

nom = "Jean"; // ⚠ Déconseillé : variable globale (portée partout)
console.log("Nom :", nom); // Affiche "Jean"

// =========================================
// d. LES TYPES DE DONNÉES
// =========================================

// - String (Chaîne de caractères)
let prenom = "Alice";

// - Number (Nombre)
let nombre = 42;

// - Boolean (Booléen)
let estVrai = true;

// - Array (Tableau)
let fruits = ["Pomme", "Banane", "Orange"];

// - Object (Objet)
let personne = {
    nom: "Dupont",
    age: 30
};

// - Null / Undefined
let vide = null;
let nonDefini;

console.log("Prénom :", typeof prenom); // string
console.log("Nombre :", typeof nombre); // number
console.log("Est vrai ?", typeof estVrai); // boolean
console.log("Fruits :", typeof fruits); // object (spécial pour les tableaux)
console.log("Personne :", typeof personne); // object
console.log("Vide :", typeof vide); // object (historique)
console.log("Non défini :", typeof nonDefini); // undefined

// =========================================
// e. LES OPÉRATEURS
// =========================================

let x = 10, y = 5;

// Arithmétiques
console.log("Addition :", x + y); // 15
console.log("Soustraction :", x - y); // 5
console.log("Multiplication :", x * y); // 50
console.log("Division :", x / y); // 2

// Comparaison
console.log("x > y ?", x > y); // true
console.log("x === y ?", x === y); // false (égalité stricte)

// Logiques
console.log("ET logique :", x > 0 && y > 0); // true
console.log("OU logique :", x > 0 || y < 0); // true

// =========================================
// f. STRUCTURE CONDITIONNELLE IF
// =========================================

let heure = 14;

if (heure < 12) {
    console.log("Bon matin !");
} else if (heure < 18) {
    console.log("Bon après-midi !"); // Ceci s'affiche
} else {
    console.log("Bonsoir !");
}

// =========================================
// g. STRUCTURE CONDITIONNELLE SWITCH
// =========================================

let jour = "Lundi";

switch (jour) {
    case "Lundi":
        console.log("C'est le début de la semaine !"); // Affiche ceci
        break;
    case "Vendredi":
        console.log("Bientôt le week-end !");
        break;
    default:
        console.log("Un autre jour...");
}

// =========================================
// h. LES BOUCLES
// =========================================

// Boucle FOR
console.log("Boucle FOR :");
for (let i = 0; i < 3; i++) {
    console.log("Itération :", i); // 0, 1, 2
}

// Boucle WHILE
console.log("Boucle WHILE :");
let j = 0;
while (j < 3) {
    console.log("Itération :", j); // 0, 1, 2
    j++;
}

// Boucle FOR...OF (pour les tableaux)
console.log("Boucle FOR...OF :");
for (let fruit of fruits) {
    console.log("Fruit :", fruit); // Pomme, Banane, Orange
}

// =========================================
// i. LES FONCTIONS
// =========================================

// Fonction simple
function direBonjour(nom) {
    return "Bonjour, " + nom + " !";
}

console.log(direBonjour("Marie")); // "Bonjour, Marie !"

// Fonction fléchée (ES6)
const addition = (a, b) => a + b;
console.log("Addition (5 + 3) :", addition(5, 3)); // 8