

// DOM Elements
const modalbg = document.getElementById("formWindow");

//variable pour tous les inputs
const formData = document.querySelectorAll(".formData");

const submitBtn = document.getElementsByClassName('btn-submit');
const form = document.querySelector("form");
const firstName = document.getElementById("first");
const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;



// ajouter une classe au formulaire 

function addClass() {
  modalbg.classList.add("misha");
}

modalBtn.forEach((btn) =>btn.addEventListener("click", addClass))


// close form
closeForm.addEventListener("click", () => {
  modalbg.classList.remove("misha");
})

// bloquer le formulaire
form.addEventListener("submit", (e) => {
  e.preventDefault();
});
/-----------------------------------------------------------------------/
//ajouter un attribut

  


//fonction pour afficher un message d'erreur
function refuser(){
  formData[0].setAttribute("data-error-visible", "true");
  
}
//fonction pour accepter le champ
function accepter(){
  formData[0].setAttribute("data-error-visible", "false")
}

//fonction pour récupérer les valeurs entrées

//condition pour donner des indications sur le nombre de caracteres du PRENOM
const firstNameChecker = (value) => {
formData.forEach((input) => {
  if (value.length > 0 && (value.length <3 || value.length > 20)
  ) {
    
    refuser();
    formData[0].setAttribute("data-error", "Le prénom doit contenir entre 2 et 20 caractères");
  }else {
    accepter();
  }
  })
  ;
};
//condition pour donner des indications sur le nombre de caracteres du NOM

const lastNameChecker =  (value) => {
  formData.forEach((input) => {
  if (value.length > 0 && (value.length <3 || value.length > 20)
  ) {
    
    formData[1].setAttribute("data-error-visible", "true");
    formData[1].setAttribute("data-error", "Le nom doit contenir entre 2 et 20 caractères");
  }else {
    formData[1].setAttribute("data-error-visible", "false")
  }
  })
  ;
};

const emailChecker = (value)=> { 
  formData.forEach((input) => {
if (!value.match(/^[\w_-]+@[\w-]+\.[a-z]{2,4}$/i) || ( value == '' )) 
 {
  formData[2].setAttribute("data-error-visible", "true")
  formData[2].setAttribute("data-error", "L'adresse mail n'est pas correcte");
}else {
  formData[2].setAttribute("data-error-visible", "false")
}
  });
};

const dateChecker = (value)=> {
  if ( value == '' ) {
    formData[3].setAttribute("data-error-visible", "true");
    formData[3].setAttribute("data-error", "Vous devez entrer votre date de naissance.");
 
  }else {
    formData[3].setAttribute("data-error-visible", "false")
  }
};

const challengeChecker = (value) => {
  if ( value < 0 || (value == '')) 
  {
    formData[4].setAttribute("data-error-visible", "true");
    formData[4].setAttribute("data-error", "Vous devez entrer un nombre.");
  }else {
    formData[4].setAttribute("data-error-visible", "false")
  }
  };

//fonction pour déterminer sur quel input je travaille

formData.forEach((input) => {
  input.addEventListener('input', (e) => {
    
    switch (e.target.id) {
      case "first":
        firstNameChecker(e.target.value);
        break;
      case "last":
        lastNameChecker(e.target.value);
        break;
      case "email":
        emailChecker(e.target.value);
        break;
      case "birthdate":
        dateChecker(e.target.value);
        break;
      case "quantity":
        challengeChecker(e.target.value);
        break;
      case "checkbox-input":
        checkboxChecker(e.target.value);
        break;
      default:
        console.log("choconul");   
    }
  });
});
