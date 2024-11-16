// récuperer les éléments du DOM
const form = document.querySelector("#register-form");
const passwordElement = document.querySelector("#password");
const passwordConfirmElement = document.querySelector("#password-confirm");
const message = document.querySelector("#message");
const PASSWORD_REGEX = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

let isFormValid = false;
let isPasswordMatch = false;

// validation du mot de passe
function isValidPassword(password) {
  return PASSWORD_REGEX.test(password);
}
// Afficher un message
function showMessage(text, color) {
  console.log(text, color);
  message.textContent = "Le formulaire est invalide";
  message.classList.add(`border-${color}-500`, `text-${color}-500`);
}
// changer la bordure
function setBorderColor(element, color) {
  console.log(element, color);
  element.classList.add(`border-${color}-500`, `text-${color}-500`);
}
// validation du formulaire
function validateForm() {
  // vérification du formulaire
  isFormValid = form.checkValidity();
  console.log(isFormValid);

  // formulaire invalide
  if (!isFormValid) {
    console.log("form invalid");
    showMessage("Le formulaire est invalide", "red");
    setBorderColor(message, "red");
    return false;
  }

  if (passwordElement.value !== passwordConfirmElement.value) {
    console.log("password not equal");
    showMessage("Les mots de passe doivent être identique", "red");
    setBorderColor(passwordElement, "red");
    setBorderColor(passwordConfirmElement, "red");
    return false;
  } else if (!isValidPassword(passwordElement.value)) {
    console.log("password format invalid");
    showMessage("Le mot de passe doit avoir ...", "red");
    setBorderColor(passwordElement, "red");
    return false;
  }
  return true;
}
// Inscrire l'utilisateur
function registerUser() {
  // Exemple 1
  //const nom = document.querySelector("#nom").value;
  //const prenom = document.querySelector("#prenom").value;
  //const email = document.querySelector("#email").value;

  // Exemple 2 avec formData
  const formData = new FormData(form);

  const newUser = {
    nom: formData.get("nom"),
    prenom: formData.get("prenom"),
    email: formData.get("email"),
  };
  console.log(newUser);
  // espace mémoire dans le navigateur : 5 mo
  localStorage.setItem("currentUser", JSON.stringify(newUser));
}
// soumission du formulaire
function handleSubmit(event) {
  event.preventDefault(); // supprime le comportement par défaut
  console.log("submit");

  // soumission
  if (validateForm()) {
    console.log("form valid");
    // afficher un message
    showMessage("Inscription réussie", "emerald");
    registerUser();
    // retirer le message avec 3s
    // asyncrone
    setTimeout(() => {
      message.textContent = "";
      message.className = "";
    }, 3000);
  }
}
// attacher l'évènement
form.addEventListener("submit", handleSubmit);
