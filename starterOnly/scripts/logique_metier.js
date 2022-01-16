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
// ouvrir la fenetre
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));  
  
// close modal function
function closeModal() {
  modalbg.style.display = "none";
}
// fermer la fenetre
closeForm.addEventListener("click", closeModal );
  

// ouvrir la fenetre quand c'est validé
export function openSuccessModal() {
  const successModal = document.querySelector('.modal-thanks');
  successModal.style.display = 'flex';
}