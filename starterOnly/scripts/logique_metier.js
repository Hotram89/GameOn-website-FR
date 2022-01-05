// ajouter une logique métier permet de garantir 
// que les colonnes d’une application pilotée par modèle 
// sont affichées, masquées ou définies avec les valeurs correctes.

// DOM Elements
const closeForm = document.getElementById("cross");
const modalbg = document.getElementById("formWindow");
const modalBtn = document.querySelectorAll(".modal-btn");

// launch modal function
export function launchModal() {
    modalbg.style.display = "block";
  }
// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));  
  
// close modal event
closeForm.addEventListener("click", () => {
    modalbg.style.display = "none";
  }) 
  
  const description = document.querySelector(".hero-text");

  

  //
  description.parentNode.removeChild(description);

  console.log(description);
  console.log(typeof description);