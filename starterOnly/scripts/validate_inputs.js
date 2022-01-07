// DOM Elements
const formField = document.querySelectorAll(".formData");
const submitBtn = document.getElementsByClassName('btn-submit');

let hasError = 0;


//fonction pour déterminer sur quel input je travaille

export function validerFormulaire() {
        console.log(validation);
    };

// bloquer le formulaire
 form.addEventListener("submit", (e) => {
      e.preventDefault();
  });

// valider le prenom
form.addEventListener('keyup', (e) => {
    let firstName = document.getElementById("first");
    let errorDesign = firstName.closest('div');
    
    if (firstName.value.length > 0 && (firstName.value.length <3 || firstName.value.length > 20)
  ) {
    errorDesign.setAttribute("data-error", "Le prénom doit contenir entre 2 et 20 caractères");
    errorDesign.setAttribute("data-error-visible", "true");
    hasError = true;
  }else {
    errorDesign.setAttribute("data-error-visible", "false");
    hasError = 0;
  }
});

//valider le nom de famille
form.addEventListener('keyup', (e) => {
    let lastName = document.getElementById("last");
    let errorName = lastName.closest('div');
    console.log(errorName);

    if (lastName.value.length > 0 && (lastName.value.length <3 || lastName.value.length > 20)
    ) {
    
        errorName.setAttribute("data-error", "Le nom doit contenir entre 2 et 20 caractères");
        errorName.setAttribute("data-error-visible", "true");
        hasError = true;
    }else {
        errorName.setAttribute("data-error-visible", "false");
        hasError = 0;
    }
});
    
// valider tous les formulaire
form.addEventListener("submit", (e) => {
     
console.log(hasError);
    if (hasError === null ) {
        console.log("y'a un blem");
    }else {(hasError === 0 ) 
        console.log(" oki doki ");
    }
});