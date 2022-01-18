// fonction qui sert a savoir si mes champs sont valides
export function validerChamps() 
{
    let champPrenom = document.querySelector('#first');
    let champNom = document.querySelector('#last');
    let champEmail = document.querySelector('#email');
    let champDate = document.querySelector('#birthdate');
    let champChallenge = document.querySelector('#quantity');
    let champVilles = document.querySelectorAll('input[name=location]:checked');
    let champCondition = document.querySelector('#checkbox1');

    let msgPrenom = "Le prénom doit contenir au minimum 2 caractères";
    let msgNom = "Le nom doit contenir au minimum 2 caractères";
    let msgMail = "Veuillez respectez le format du courriel (exemple@domaine.fr)";
    let msgDate = "Vous devez entrer votre date de naissance";
    let msgCond = "Veuillez accepter les conditions pour finaliser l'inscription";
    let msgChall = "Vous devez entrer un nombre";
    let msgVille = "Vous devez choisir une option";
    //recuperer tout les true et false et calculer le resultat final
    
    validerChampText(champPrenom , msgPrenom)
     validerChampText(champNom, msgNom)
     validerChampEmail(champEmail, msgMail)
     validerChampDate(champDate, msgDate)
     validerChampChallenge(champChallenge, msgChall)
     validerChampVille(champVilles, msgVille)
     validerConditions(champCondition, msgCond);

}
// cas 1  etat initial n'a pas d'erreur  maintenant  a 1 erreur        ajouterErreur
// cas 2               avait 1 erreur                 a 1 erreur       
// cas 3               n'a pas d'erreur                a 0 erreur      
// cas 4               avait 1 erreur                  a 0 erreur      retirerErreur


function afficherErreur(field, message)
{
    if ( field.closest('div').getAttribute('data-error-visible') === 'false' || field.closest('div').getAttribute('data-error-visible') === null)
    {
    console.log('afficher erreur');
    field.closest('div').setAttribute("data-error-visible", true);
    field.closest('div').setAttribute("data-error", message);
    }  
}

function retirerErreur(field, message)
{
    field.closest('div').setAttribute("data-error-visible", false)   
}

// fonction qui sert a savoir si le prenom est correct
 function validerChampText(field, message) 
{   
    let isValid = field.value.trim().length > 2;
    if (isValid === false)
    {
        afficherErreur(field, message);
    } else {
        retirerErreur(field);
    } 
}

// fonction qui sert a savoir si l'email est correct
 function validerChampEmail(field, message)
{
    let email= field.value;
    let isValid = /^[\.\w_-]+@[\w-]+\.[a-z]{2,4}$/i.test(email);
    if (isValid === false)
    {
        afficherErreur(field, message);
    } else {
        retirerErreur(field);
    }
 //   console.log(isValid);
    return isValid;
    
}
// fonction qui sert a savoir si la date est entrée
 function validerChampDate(field, message)
{
    let isValid = field.value.trim().length > 0 ;
    if (isValid === false)
    {
        afficherErreur(field, message);
    
    } else {
        retirerErreur(field);
    }
 //   console.log(isValid);
    return isValid;
}

//fonction qui sert à savoir si un nombre est entré
 function validerChampChallenge(field, message)
{ 
    let isValid = field.value.length > 0 ;
    if (isValid === false)
    {
        afficherErreur(field, message);
    } else {
        retirerErreur(field);
    }
//    console.log(isValid);
    return isValid;
}

//fonction qui sert à savoir si une ville est cochée
export function validerChampVille(fields)
 {
     let locationError = document.querySelector('.location-msg');
     let isValid = fields.length > 0;
     

     if ( isValid === false || isValid === null)
    {
    console.log("ouesh");
    locationError.classList.add("error-display")
    }  else {
        locationError.classList.remove("error-display")
    }
     console.log(isValid);
     return isValid;
   
   
 }
//fonction qui sert à savoir si la condition est cochée
export function validerConditions(field, message)
 {
     let isValid = field.checked;

     if (isValid === false)
    {
        afficherErreur(field, message);
    } else {
        retirerErreur(field);
    }
  //   console.log(isValid);
     return isValid;
 }


function messageErreur () {
    if ( validerChampText(champPrenom) == false) {
        console.log( "message d'erreur");
    }
}




