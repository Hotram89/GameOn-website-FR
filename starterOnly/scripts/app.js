import { editNav } from "./responsiveMenu.js";

import { launchModal } from "./logique_metier.js";
import { openSuccessModal } from "./logique_metier.js";


import { validerChamps } from "./validation.js";




const form = document.querySelector("form");
const modal = document.querySelector(".modal-body");


// bloquer le formulaire
form.addEventListener("submit", (e) => {
    
    e.preventDefault();  
   
    modal.classList.remove("modal-msg");
    

   
 //   if (document.querySelectorAll('[data-error-visible=true]').length == 0) {
    if    (validerChamps() === true )
    {
        form.style.display = 'none';
        modal.classList.add("modal-msg");
       // openSuccessModal();
    }
});
