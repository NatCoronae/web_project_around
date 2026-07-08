// ============================================================
// Elementos del DOM
// ============================================================

const popup = document.querySelector(".popup");
const popupEditButton = document.querySelector(".profile__edit-button");
const popupCloseButton = document.querySelector(".popup__close");
const popupForm = document.querySelector(".popup__form");

const nameInput = document.querySelector(".popup__input[name='name']");
const aboutInput = document.querySelector(".popup__input[name='about']");

const profileName = document.querySelector(".profile__name");
const profileDescription = document.querySelector(".profile__description");

// ============================================================
// Abrir y cerrar el popup
// ============================================================

function openPopup() {
  popup.classList.add("popup_opened");
}

function closePopup() {
  popup.classList.remove("popup_opened");
}

function handleEditButtonClick() {
  // Rellenamos los campos con los valores actuales de la página
  nameInput.value = profileName.textContent;
  aboutInput.value = profileDescription.textContent;
  openPopup();
}

popupEditButton.addEventListener("click", handleEditButtonClick);
popupCloseButton.addEventListener("click", closePopup);

// ============================================================
// Enviar el formulario (guardar cambios)
// ============================================================

function handleProfileFormSubmit(evt) {
  // Evita que el navegador recargue la página al enviar el formulario
  evt.preventDefault();

  // Actualizamos la información en la página con los nuevos valores
  profileName.textContent = nameInput.value;
  profileDescription.textContent = aboutInput.value;

  closePopup();
}

popupForm.addEventListener("submit", handleProfileFormSubmit);
