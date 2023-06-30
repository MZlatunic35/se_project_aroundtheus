export const initialCards = [
  {
    name: "Yosemite Valley",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/yosemite.jpg",
  },
  {
    name: "Lake Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lake-louise.jpg",
  },
  {
    name: "Bald Mountains",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/latemar.jpg",
  },
  {
    name: "Vanoise National Park",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lago.jpg",
  },
];

export const profileEditButton = document.querySelector("#profile-edit-button");
export const profileAddButton = document.querySelector("#profile-add-button");
export const profileEditModal = document.querySelector("#profile-edit-modal");
export const addCardModal = document.querySelector("#add-card-modal");
export const previewImageModal = document.querySelector("#preview-modal");
export const profileModalCloseButton =
  profileEditModal.querySelector(".modal__close");
export const addCardModalCloseButton =
  addCardModal.querySelector(".modal__close");
export const previewModalCloseButton =
  previewImageModal.querySelector(".modal__close");
export const profileTitle = document.querySelector(".profile__title");
export const profileDescription = document.querySelector(
  ".profile__description"
);
export const modalTitleInput = document.querySelector("#edit-form-title");
export const modalDescriptionInput = document.querySelector(
  "#edit-form-description"
);
export const profileEditForm = profileEditModal.querySelector(".modal__form");
export const addCardForm = addCardModal.querySelector(".modal__form");
export const cardListEl = document.querySelector(".cards__list");
export const cardTemplate =
  document.querySelector("#card-template").content.firstElementChild;
export const cardTitleInput = addCardForm.querySelector(
  ".modal__input_type_title"
);
export const cardUrlInput = addCardForm.querySelector(".modal__input_type_url");
export const previewImage = document.querySelector(".modal__preview-image");
export const previewFooter = document.querySelector(".modal__preview-footer");

export const formValidationConfig = {
  inputSelector: ".modal__input",
  submitButtonSelector: ".modal__button",
  inactiveButtonClass: "modal__button_disabled",
  inputErrorClass: "modal__input_type_error",
  errorClass: "modal__error_visible",
};
