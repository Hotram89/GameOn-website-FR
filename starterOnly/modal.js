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
const formData = document.querySelectorAll(".formData");
const closeForm = document.getElementById("cross");


// ajouter une classe au formulaire 

function addClass() {
  modalbg.classList.add("misha");
}

modalBtn.forEach((btn) =>btn.addEventListener("click", addClass))


// close form
closeForm.addEventListener("click", () => {
  modalbg.classList.remove("misha");
})