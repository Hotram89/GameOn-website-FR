

// fonction qui sert a savoir si mes champs sont valides
export function validerChamps() 
{
    let champPrenom = document.querySelector('#first').value;
    let champNom = document.querySelector('#last').value;
    let champEmail = document.querySelector('#email').value;
    validerChampPrenom(champPrenom);
    validerChampNom(champNom);
    validerChampEmail(champEmail);
    
}

// fonction qui sert a savoir si le prenom est correct
function validerChampPrenom(prenom) 
{  
    if ( prenom.length >= 3 ) console.log("le prenom est correct");
    else console.log(" le prénom n'est pas bon ");
}

function validerChampNom(nom)
{
    if (nom.length >= 3 )  {
        console.log(" le nom est correct");
    } else {
        console.log(" le nom n'est pas bon ");
    }
}

function validerChampEmail(email)
{
    if (email.match(/^[\w_-]+@[\w-]+\.[a-z]{2,4}$/i) ) {
        console.log( "l'email est correct");
    } else {
        console.log( "l'email n'est pas bon");
    }
}