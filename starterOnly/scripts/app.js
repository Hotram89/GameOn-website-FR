import { editNav } from "./responsiveMenu.js";

import { launchModal } from "./logique_metier.js";
import { openSuccessModal } from "./logique_metier.js";


import { validerChamps , validerChampText , validerChampEmail , validerChampDate , validerChampVille , validerConditions , validerChampChallenge } from "./validation.js";





const form = document.querySelector("form");

// bloquer le formulaire
form.addEventListener("submit", (e) => {
    validerChamps();
    e.preventDefault();
    
 //   if (document.querySelectorAll('[data-error-visible=true]').length == 0) {
    if    (validateurGlobal === true )
    {
        openSuccessModal();
    }
});
