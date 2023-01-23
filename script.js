//Recuperation
const titreIconJ1Item = document.querySelector(".player1 span");
const titreIconJ2Item = document.querySelector(".player2 span");

const scoreTotalJ1Item = document.querySelector(".player1 .score-total");
const scoreTotalJ2Item = document.querySelector(".player2 .score-total");

const scorepetitJ1Item = document.querySelector(".player1 .score-petit");
const scorepetitJ2Item = document.querySelector(".player2 .score-petit");

const deImgItem = document.querySelector("img");

const newGameItem = document.querySelector(".newgame");
const rollDiceItem = document.querySelector(".rolldice");
const holdItem = document.querySelector(".hold");
const victoireItem = document.querySelector(".victoire");

victoireItem.style.display = "none";

//Variables

let tour = "player1";
let deValeur = 0;
let jeu = true;

let scoreTotalJ1Valeur = 0;
let scoreTotalJ2Valeur = 0;

let scorePetitJ1Valeur = 0;
let scorePetitJ2Valeur = 0;

//Activation Iconne
function activationIconne() {
    if (tour == "player1") {
        titreIconJ1Item.style.display = "block";
        titreIconJ2Item.style.display = "none";
    } else {
        titreIconJ1Item.style.display = "none";
        titreIconJ2Item.style.display = "block";
    }
}

//Victoire
function victoire(player) {
    victoireItem.style.display = "block";
    victoireItem.textContent = "Le " + player + " à gagné !";
}

//Mise à jour texte
function miseAJour() {
    scorepetitJ1Item.textContent = scorePetitJ1Valeur;
    scorepetitJ2Item.textContent = scorePetitJ2Valeur;

    scoreTotalJ1Item.textContent = scoreTotalJ1Valeur;
    scoreTotalJ2Item.textContent = scoreTotalJ2Valeur;
}

//Mise à jour dé
function miseAJourDe() {
    deImgItem.setAttribute("src", deValeur + ".png");
    if (deValeur == 0) {
        deImgItem.setAttribute("src", "https://upload.wikimedia.org/wikipedia/commons/2/25/Carr%C3%A9_blanc.jpg")
    }
}

activationIconne();
console.log("c'est à " + tour + "de jouer");

//Recommencer jeu
newGameItem.addEventListener("click", () => {
    tour = "player1";
    deValeur = 0;

    scoreTotalJ1Valeur = 0;
    scoreTotalJ2Valeur = 0;

    scorePetitJ1Valeur = 0;
    scorePetitJ2Valeur = 0;
    activationIconne();
    miseAJour();
    miseAJourDe()
    jeu = true;
});

//Lancer du dé
rollDiceItem.addEventListener("click", () => {
    min = 1;
    max = 6;
    deValeur = Math.floor(Math.random() * (max - min)) + min;
    if (jeu == true) {
        if (tour == "player1") {
            if (deValeur == 1) {
                scorePetitJ1Valeur = 0;
                tour = "player2";
                console.log("dé valeur : " + deValeur);
                console.log("c'est à " + tour + " de jouer");
                activationIconne();
                miseAJour();
                miseAJourDe()
            } else {
                scorePetitJ1Valeur += deValeur;
                tour = "player2";
                console.log("dé valeur : " + deValeur);
                console.log("c'est à " + tour + " de jouer");
                activationIconne();
                miseAJour();
                miseAJourDe()
            }
        } else {
            if (deValeur == 1) {
                scorePetitJ2Valeur = 0;
                tour = "player1";
                console.log("dé valeur : " + deValeur);
                console.log("c'est à " + tour + " de jouer");
                activationIconne();
                miseAJour();
                miseAJourDe()
            } else {
                scorePetitJ2Valeur += deValeur;
                tour = "player1";
                console.log("dé valeur : " + deValeur);
                console.log("c'est à " + tour + " de jouer");
                activationIconne();
                miseAJour();
                miseAJourDe()
            }
        }
    }
});

holdItem.addEventListener("click", () => {
    if (jeu == true) {
        if (tour == "player1") {
            if (scoreTotalJ1Valeur + scorePetitJ1Valeur >= 20) {
                scoreTotalJ1Valeur += scorePetitJ1Valeur;
                victoire("player1");
                activationIconne();
                miseAJour();
                miseAJourDe()
                jeu = false;
            } else {
                scoreTotalJ1Valeur += scorePetitJ1Valeur;
                scorePetitJ1Valeur = 0;
                tour = "player2";
                console.log("score petit : " + scorePetitJ1Valeur);
                console.log("c'est à " + tour + " de jouer");
                activationIconne();
                miseAJour();
                miseAJourDe()
            }
        } else {
            if (scoreTotalJ2Valeur + scorePetitJ2Valeur >= 20) {
                scoreTotalJ2Valeur += scorePetitJ2Valeur;
                victoire("player2");
                activationIconne();
                miseAJour();
                miseAJourDe()
                jeu = false;
            } else {
                scoreTotalJ2Valeur += scorePetitJ2Valeur;
                scorePetitJ2Valeur = 0;
                tour = "player1";
                console.log("score petit : " + scorePetitJ2Valeur);
                console.log("c'est à " + tour + " de jouer");
                activationIconne();
                miseAJour();
                miseAJourDe()
            }
        }

    }
});


