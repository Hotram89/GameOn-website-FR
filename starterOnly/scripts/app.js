import { editNav } from './responsiveMenu.js';
import { validateFields } from './validation.js';
import { launchModal, openSuccessModal } from './logique_metier.js';

const form = document.querySelector('form');
const modal = document.querySelector('#formWindow');

// bloquer le formulaire
form.addEventListener('submit', submitForm);

function submitForm(e) {
    e.preventDefault();
    validateFields();

    if (document.querySelectorAll('[data-error-visible=true]').length == 0) {
        modal.style.display = 'none';
        form.reset();
        openSuccessModal();
    }
}
