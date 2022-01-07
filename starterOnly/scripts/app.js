import { editNav } from "./responsiveMenu.js";

import { launchModal } from "./logique_metier.js";

import { validerChamps } from "./validation.js";


const form = document.querySelector("form");

// bloquer le formulaire
form.addEventListener("submit", (e) => {
    validerChamps();
    e.preventDefault();
    
});
