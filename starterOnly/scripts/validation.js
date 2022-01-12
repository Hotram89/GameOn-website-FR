

// fonction qui sert a savoir si mes champs sont valides
export function validerChamps() 
{
    
    let champPrenom = document.querySelector('#first');
    let champNom = document.querySelector('#last');
    let champEmail = document.querySelector('#email');
    let champDate = document.querySelector('#birthdate');
    let champChallenge = document.querySelector('#quantity');
    let listeVilles = document.querySelectorAll('input[name=location]');
    let champCondition = document.querySelector('#checkbox1');

    let msgPrenom = "Le prénom doit contenir au minimum 2 caractères";
    let msgNom = "le nom doit contenir au minimum 2 caractères";
    let msgMail = "Veuillez respectez le format du courriel (exemple@domaine.fr)";
    let msgDate = "Vous devez entrer votre date de naissance";
    let msgCond = "Veuillez accepter les conditions pour finaliser l'inscription";
    let msgChall = "Vous devez entrer un nombre";
    let msgVille = "Vous devez choisir une option";
    //recuperer tout les true et false et calculer le resultat final
    let validateurGlobal = 
    validerChampText(champPrenom , msgPrenom)
    && validerChampText(champNom, msgNom)
    && validerChampEmail(champEmail, msgMail)
    && validerChampDate(champDate, msgDate)
    && validerChampChallenge(champChallenge, msgChall)
    && validerChampVille(listeVilles, msgVille)
    && validerConditions(champCondition, msgCond);

    console.log(validateurGlobal); 
    return validateurGlobal;
}

// fonction qui sert a savoir si le prenom est correct
export function validerChampText(field, message) 
{  
    let isValid = field.value.trim().length > 2;
    if (isValid === false)
    {
        field.closest('div').setAttribute("data-error-visible", true);
        field.closest('div').setAttribute("data-error", message)
    } else {
        field.closest('div').setAttribute("data-error-visible", false);
    }
 //   console.log(isValid);
    return isValid;
}

// fonction qui sert a savoir si l'email est correct
export function validerChampEmail(field, message)
{
    let email= field.value;
    let isValid = /^[\.\w_-]+@[\w-]+\.[a-z]{2,4}$/i.test(email);
    if (isValid === false)
    {
        field.closest('div').setAttribute("data-error-visible", true);
        field.closest('div').setAttribute("data-error", message);
    } else {
        field.closest('div').setAttribute("data-error-visible", false);
    }
 //   console.log(isValid);
    return isValid;
    
}
// fonction qui sert a savoir si la date est entrée
export function validerChampDate(field, message)
{
    let isValid = field.value.trim().length > 0 ;
    if (isValid === false)
    {
        field.closest('div').setAttribute("data-error-visible", true);
        field.closest('div').setAttribute("data-error", message);
    
    } else {
        field.closest('div').setAttribute("data-error-visible", false);
    }
 //   console.log(isValid);
    return isValid;
}

//fonction qui sert à savoir si un nombre est entré
export function validerChampChallenge(field, message)
{ 
    let isValid = field.value.length > 0 ;
    if (isValid === false)
    {
        field.closest('div').setAttribute("data-error-visible", true);
        field.closest('div').setAttribute("data-error", message)

    } else {
        field.closest('div').setAttribute("data-error-visible", false);
    }
//    console.log(isValid);
    return isValid;
}

//fonction qui sert à savoir si une ville est cochée
export function validerChampVille(field , message)
 {
     for (let i = 0; i < field.length; i++)
     { 
         let isValid = false;
         if (field[i].checked){
             console.log("c'est coché");
             return true;
         }
         console.log("c'est pas coché");
        
     }
 }
//fonction qui sert à savoir si la condition est cochée
export function validerConditions(field, message)
 {
     let isValid = field.checked;

     if (isValid === false)
    {
        field.closest('div').setAttribute("data-error-visible", true);
        field.closest('div').setAttribute("data-error", message)
    } else {
        field.closest('div').setAttribute("data-error-visible", false);
    }
  //   console.log(isValid);
     return isValid;
 }

 //fonction pour ajouter message d'erreur
 
// function retirerErreur (field, message) {
    
//     if isValid {
//         field.closest('div').setAttribute("data-error-visible", false);
//     } else {
//         field.closest('div').setAttribute("data-error-visible", true);
//         field.closest('div').setAttribute("data-error", message);
//     }
// }

function messageErreur () {
    if ( validerChampText(champPrenom) == false) {
        console.log( "message d'erreur");
    }
}

