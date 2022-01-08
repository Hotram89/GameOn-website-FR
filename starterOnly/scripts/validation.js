

// fonction qui sert a savoir si mes champs sont valides
export function validerChamps() 
{
    let champPrenom = document.querySelector('#first').value;
    let champNom = document.querySelector('#last').value;
    let champEmail = document.querySelector('#email').value;
    let champDate = document.querySelector('#birthdate').value;
    let champChallenge = document.querySelector('#quantity').value;
    let champVille = document.querySelector('#location1');
    let champCondition = document.querySelector('#checkbox1');
    validerChampPrenom(champPrenom);
    validerChampNom(champNom);
    validerChampEmail(champEmail);
    validerChampDate(champDate);
    validerChampChallenge(champChallenge);
    validerChampVille(champVille);
    validerConditions(champCondition);
    
}

// fonction qui sert a savoir si le prenom est correct
function validerChampPrenom(prenom) 
{  
    if ( prenom.length >= 3 ) console.log("le prenom est correct");
    else console.log(" le prénom n'est pas bon ");
}
// fonction qui sert a savoir si le nom est correct
function validerChampNom(nom)
{
    if (nom.length >= 3 )  {
        console.log(" le nom est correct");
    } else {
        console.log(" le nom n'est pas bon ");
    }
}
// fonction qui sert a savoir si l'email est correct
function validerChampEmail(email)
{
    if (email.match(/^[\w_-]+@[\w-]+\.[a-z]{2,4}$/i) ) {
        console.log( "l'email est correct");
    } else {
        console.log( "l'email n'est pas bon");
    }
}
// fonction qui sert a savoir si la date est entrée
function validerChampDate(date)
{
    if (date.length > 0) {
        console.log("la date est entrée");
    } else {
        console.log("veuillez entrer une date");
    }
}

//fonction qui sert à savoir si un nombre est entré
function validerChampChallenge(challenge)
{
    if (challenge.length > 0) {
        console.log("le nombre de challenge est correct");
    } else {
        console.log("le nombre de challenge n'est pas bon");
    }
}

//fonction qui sert à savoir si une ville est cochée
 function validerChampVille(ville)
 {
   if (ville.checked) {
          console.log(" New York est coché ");
     } else {
         console.log("New York n'est pas coché");
     }
 }

 function validerConditions(caseCheck)
 {
     if (caseCheck.checked) {
         console.log("Les conditions sont cochées");
     } else {
         console.log("Veuillez accepter les conditions d'utilisation");
     }
 }