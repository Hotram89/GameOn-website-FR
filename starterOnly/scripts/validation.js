// fonction qui sert a savoir si mes champs sont valides
export function validateFields() {
    let firstName = document.querySelector('#first');
    let lastName = document.querySelector('#last');
    let email = document.querySelector('#email');
    let birthdate = document.querySelector('#birthdate');
    let challenge = document.querySelector('#quantity');
    let cities = document.querySelectorAll('input[name=location]:checked');
    let terms = document.querySelector('#checkbox1');

    let msgFirstName = 'Le prénom doit contenir au minimum 2 caractères';
    let msgLastName = 'Le nom doit contenir au minimum 2 caractères';
    let msgEmail =
    'Veuillez respectez le format du courriel (exemple@domaine.fr)';
    let msgDate = 'Vous devez entrer votre date de naissance';
    let msgCond = 'Veuillez accepter les conditions pour finaliser l\'inscription';
    let msgChall = 'Vous devez entrer un nombre';

    validateTextField(firstName, msgFirstName);
    validateTextField(lastName, msgLastName);
    validateEmailField(email, msgEmail);
    validateDateField(birthdate, msgDate);
    validateChallengeField(challenge, msgChall);
    validateCityCheckbox(cities);
    validateTerms(terms, msgCond);
}

function showError(field, message) {
    if (
        field.closest('div').getAttribute('data-error-visible') === 'false' ||
        field.closest('div').getAttribute('data-error-visible') === null
    ) {
        field.closest('div').setAttribute('data-error-visible', true);
        field.closest('div').setAttribute('data-error', message);
    }
}

function hideError(field, message) {
    field.closest('div').setAttribute('data-error-visible', false);
}

// fonction qui sert a savoir si le prenom est correct
function validateTextField(field, message) {
    if (field.value.trim().length > 1 && /^[a-zéèêë ,.'-']+$/i.test(field.value)) {
        hideError(field);
        return;
    }

    showError(field, message);
}

// fonction qui sert a savoir si l'email est correct
function validateEmailField(field, message) {
    let email = field.value;

    if (/^[\.\w_-]+@[\w-]+\.[a-z]{2,4}$/i.test(email)) {
        hideError(field);
        return;
    }

    showError(field, message);
}
// fonction qui sert a savoir si la date est entrée
function validateDateField(field, message) {
    if (field.value.trim().length > 0) {
        hideError(field);
        return;
    }
    showError(field, message);
}

//fonction qui sert à savoir si un nombre est entré
function validateChallengeField(field, message) {
    if (field.value.length > 0) {
        hideError(field);
        return;
    }
    showError(field);
}

//fonction qui sert à savoir si une ville est cochée
export function validateCityCheckbox(fields) {
    let locationError = document.querySelector('.location-msg');
    let isValid = fields.length > 0;

    if (isValid === false || isValid === null) {
        locationError.setAttribute('data-error-visible', true);
        locationError.classList.add('error-display');
        return;
    }

    locationError.classList.remove('error-display');
    locationError.setAttribute('data-error-visible', false);
}
//fonction qui sert à savoir si la condition est cochée
function validateTerms(field, message) {
    if (field.checked) {
        hideError(field);
        return;
    }
    showError(field, message);
}
