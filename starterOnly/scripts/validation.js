

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

    let validateurGlobal = 
    validerChampText(champPrenom)
    && validerChampText(champNom)
    && validerChampEmail(champEmail)
    && validerChampDate(champDate)
    && validerChampChallenge(champChallenge)
    && validerChampVille(listeVilles)
    && validerConditions(champCondition);

    console.log(validateurGlobal);
   
}

// fonction qui sert a savoir si le prenom est correct
function validerChampText(field, message) 
{  
    let isValid = field.value.trim().length > 2;
 //   console.log(isValid);
    return isValid;
}

// fonction qui sert a savoir si l'email est correct
function validerChampEmail(field, message)
{
    let email= field.value;
    let isValid = /^[\.\w_-]+@[\w-]+\.[a-z]{2,4}$/i.test(email);
 //   console.log(isValid);
    return isValid;
    
}
// fonction qui sert a savoir si la date est entrée
function validerChampDate(field, message)
{
    let isValid = field.value.trim().length > 0 ;
 //   console.log(isValid);
    return isValid;
}

//fonction qui sert à savoir si un nombre est entré
function validerChampChallenge(field, message)
{ 
    let isValid = field.value.length > 0 ;
//    console.log(isValid);
    return isValid;
}

//fonction qui sert à savoir si une ville est cochée
 function validerChampVille(field)
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

 function validerConditions(field)
 {
     let isValid = field.checked;
  //   console.log(isValid);
     return isValid;
 }