const initialCards = [
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
  }
];

// Elements

const profileEditButton = document.querySelector('#profile-edit-button');
const profileAddButton = document.querySelector('#profile-add-button');
const profileEditModal = document.querySelector('#profile-edit-modal');
const addCardModal = document.querySelector('#add-card-modal');
const previewImageModal = document.querySelector('#preview-modal');
const profileModalCloseButton = profileEditModal.querySelector('#modal-close-button');
const addCardModalCloseButton = addCardModal.querySelector('#modal-close-button');
const previewModalCloseButton = previewImageModal.querySelector('#modal-close-button');
const profileTitle = document.querySelector('.profile__title');
const profileDescription = document.querySelector('.profile__description');
const modalTitleInput = document.querySelector('#modal-form-title');
const modalDescriptionInput = document.querySelector('#modal-form-description');
const profileEditForm = profileEditModal.querySelector('.modal__form');
const addCardForm = addCardModal.querySelector('.modal__form');
const cardListEl = document.querySelector('.cards__list');
const cardTemplate = document.querySelector('#card-template').content.firstElementChild;
const cardTitleInput = addCardForm.querySelector('.modal__input_type_title');
const cardUrlInput = addCardForm.querySelector('.modal__input_type_url');
const previewImage = document.querySelector('.modal__preview-image');
const previewFooter = document.querySelector('.modal__preview-footer');

// Functions

function closePopup() {
  profileEditModal.classList.remove("modal__opened");
  addCardModal.classList.remove("modal__opened");
  previewImageModal.classList.remove("modal__opened");
}

function openPopup(modal) {
  modal.classList.add("modal__opened");
}

function renderCard (cardData, wrapper) {
  const cardElement = getCardElement(cardData);
  wrapper.prepend(cardElement);
}

function getCardElement(cardData) {
  const cardElement = cardTemplate.cloneNode(true);
  const cardImageEl = cardElement.querySelector('.card__image');
  const cardTitleEl = cardElement.querySelector('.card__title');
  const likeButton = cardElement.querySelector('.card__like-button');
  const deleteButton = cardElement.querySelector('.card__delete-button');

  likeButton.addEventListener('click', () => {
    likeButton.classList.toggle('card__like-button_active');
  });

  deleteButton.addEventListener('click', () => {
    cardElement.closest('.card').remove();
  });

  cardImageEl.addEventListener('click', () => {
    previewImage.src = cardData.link;
    previewImage.alt = cardTitleEl.textContent;
    previewFooter.textContent = cardData.name;
    openPopup(previewImageModal);
  });

  cardTitleEl.textContent = cardData.name;
  cardImageEl.alt = cardTitleEl.textContent;
  cardImageEl.src = cardData.link;

  return cardElement;
}

// Event Handlers

function handleProfileEditSubmit(e) {
  e.preventDefault();
  profileTitle.textContent = modalTitleInput.value;
  profileDescription.textContent = modalDescriptionInput.value;
  closePopup(profileEditModal);
}

function handleAddCardSubmit(e) {
  e.preventDefault();
  const name = cardTitleInput.value;
  const link = cardUrlInput.value;
  renderCard({name, link}, cardListEl);
  closePopup(addCardModal);
}

// Event Listeners

profileEditButton.addEventListener('click', () => {
  modalTitleInput.value = profileTitle.textContent;
  modalDescriptionInput.value = profileDescription.textContent;
  openPopup(profileEditModal);
});

profileModalCloseButton.addEventListener('click', closePopup);
profileEditForm.addEventListener('submit', handleProfileEditSubmit);

// add new card button
profileAddButton.addEventListener('click', () => {
  openPopup(addCardModal);
});

addCardModalCloseButton.addEventListener('click', closePopup);
addCardForm.addEventListener('submit', handleAddCardSubmit);

previewModalCloseButton.addEventListener ('click', closePopup);

initialCards.forEach((cardData) => renderCard(cardData, cardListEl));
