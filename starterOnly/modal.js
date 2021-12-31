function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.getElementById("formWindow");
const modalBtn = document.querySelectorAll(".modal-btn");
//variable pour tous les inputs
const formData = document.querySelectorAll(".formData");
const closeForm = document.getElementById("cross");
const submitBtn = document.getElementsByClassName('btn-submit');
const form = document.querySelector("form");
const firstName = document.getElementById("first");



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

const firstNameChecker = (value) => {
formData.forEach((input) => {
  if (value.length > 0 && (value.length <3 || value.length > 20)
  ) {
    
    refuser();
  }else {
    accepter();
  }
  })
  ;
};
//condition pour donner des indications sur le nombre de caracteres

const lastNameChecker = () => {
  
};

const emailChecker = ()=> {

};
//fonction pour déterminer sur quel input je travaille

formData.forEach((input) => {
  input.addEventListener('input', (e) => {
    
    switch (e.target.id) {
      case "first":
        firstNameChecker(e.target.value);
        break;
      case "last":
        lastNameChecker();
        break;
      case "email":
        emailChecker();
        break;
      default:
        console.log("choconul");   
    }
  });
});
