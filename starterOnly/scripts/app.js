import { editNav } from "./responsiveMenu.js";
import { launchModal } from "./logique_metier.js";
import { openSuccessModal } from "./logique_metier.js";
import { validateFields } from "./validation.js";

const form = document.querySelector("form");
const modal = document.querySelector("#formWindow");

// bloquer le formulaire
form.addEventListener("submit", (e) => {   
    e.preventDefault();  
    validateFields();

    if (document.querySelectorAll('[data-error-visible=true]').length == 0) {
    {   
        modal.style.display = 'none';
        form.reset();
        openSuccessModal();
    }
}
});