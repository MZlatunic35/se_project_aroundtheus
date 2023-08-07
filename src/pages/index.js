import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import "../pages/index.css";
import {
  // initialCards,
  profileEditButton,
  profileAddButton,
  profileEditModal,
  addCardModal,
  previewImageModal,
  profileModalCloseButton,
  addCardModalCloseButton,
  previewModalCloseButton,
  profileTitle,
  profileDescription,
  modalTitleInput,
  modalDescriptionInput,
  profileEditForm,
  addCardForm,
  cardListEl,
  cardTemplate,
  cardTitleInput,
  cardUrlInput,
  previewImage,
  previewFooter,
  formValidationConfig,
} from "../utils/constants.js";
import Api from "../components/Api.js";
import PopupWithConfirmation from "../components/PopupWithConfirmation.js";

// =============================================================================
// API
// =============================================================================

let userID;

const api = new Api({
  baseUrl: "https://around-api.en.tripleten-services.com/v1",
  headers: {
    authorization: "a9aaf24d-57aa-44df-b0d5-364cf1f03985",
    "Content-Type": "application/json",
  },
});

const userInfo = new UserInfo({
  nameSelector: ".profile__title",
  professionSelector: ".profile__description",
  avatarSelector: ".profile__image",
});

Promise.all([api.getUserInfo(), api.getInitialCards()]).then(
  ([user, initialCards]) => {
    userInfo.setUserInfo({ name: user.name, about: user.about });
    userID = user._id;

    const cardList = new Section(
      {
        items: initialCards,
        renderer: (data) => {
          const newCard = createCard(data);
          cardListSection.addItem(newCard);
        },
      },
      ".card__list"
    );

    cardList.renderItems();
  }
);
// .catch((err) => console.error(err));

api.getUserInfo().then((result) => {
  userInfo.setUserInfo({ name: result.name, about: result.about });
  userID = user._id;
});
// .catch((err) => {
//   console.error(err);
// });

// =============================================================================
// New Card
// =============================================================================

function createCard(data) {
  const cardElement = new Card(
    data,
    "#card-template",
    userID,
    (data) => {
      previewImagePopup.open(data, (cardID) => {
        deleteCardPopup.setSubmitAction(() => {
          api
            .deleteCard(cardID)
            .then(() => {
              card.removeCard(), deleteCardPopup.close();
            })
            .catch((err) => console.error(err));
        });
      });
      deleteCardPopup.open();
    },
    (cardID) => {
      api
        .likeCard(cardID)
        .then((cardData) => {
          card.updateCardLike(cardData.likes);
        })
        .catch((err) => console.error(err));
    }
  );
  (cardID) => {
    api
      .unlikeCard(cardID)
      .then((cardData) => {
        card.updateCardLike(cardData.likes);
      })
      .catch((err) => console.error(err));
  };
  return cardElement.getView();
}
// =============================================================================
// Preview Popup
// =============================================================================

const previewImagePopup = new PopupWithImage({
  popupSelector: "#preview-modal",
});
previewImagePopup.setEventListeners();

// =============================================================================
// Profile Popup
// =============================================================================

const newUser = new UserInfo(".profile__title", ".profile__description");

function handleProfileEditSubmit({ title, description }) {
  newUser.setUserInfo(title, description);
  profilePopup.close();
}

const profilePopup = new PopupWithForm(
  "#profile-edit-modal",
  handleProfileEditSubmit,
  (inputValues) => {
    profileEditPopup.showLoading();
    api.editProfile(inputValues);
    api
      .then(() => {
        userInfo.setUserInfo(inputValues);
        profileEditPopup.close();
      })
      .catch((err) => console.error(err))
      .finally(() => {
        profileEditPopup.hideLoading();
      });
  },
  "Saving..."
);

profilePopup.setEventListener();

profileEditButton.addEventListener("click", () => {
  const userData = newUser.getUserInfo();
  modalTitleInput.value = userData.name;
  modalDescriptionInput.value = userData.profession;
  profilePopup.open();
});

// =============================================================================
// Validation
// =============================================================================

const addFormValidator = new FormValidator(formValidationConfig, addCardForm);
addFormValidator.enableValidation();

const editFormValidator = new FormValidator(
  formValidationConfig,
  profileEditForm
);

const validationSettings = {
  inputSelector: ".modal__form-input",
  submitButtonSelector: ".modal__button",
  inactiveButtonClass: "modal__button_disabled",
  inputErrorClass: "modal__input-error",
  errorClass: "modal__input-error_visible",
};

const avatarEditModal = document.querySelector("#edit-avatar-modal");
const avatarEditForm = avatarEditModal.querySelector(".modal__form");

const editAvatarValidator = new FormValidator(
  validationSettings,
  avatarEditForm
);

editFormValidator.enableValidation();
editAvatarValidator.enableValidation();

export { previewImage, previewFooter, previewImageModal };

// =============================================================================
// Section
// =============================================================================

// const cardListSelector = ".cards__list";
// const cardListSection = new Section(
//   {
//     items: initialCards,
//     renderer: ({ name, link }) => {
//       const newCard = createCard({ name, link });
//       cardListSection.addItem(newCard);
//     },
//   },
//   cardListSelector
// );

// cardListSection.renderItems();

// =============================================================================
// Add Card Popup
// =============================================================================

const addCardPopup = new PopupWithForm(
  "#add-card-modal",
  (inputValues) => {
    const newCard = createCard(inputValues, cardListEl);
    cardListSection.prependItem(newCard);
    addCardPopup.showLoading();
    api
      .addNewCard(cardData)
      .then((card) => {
        renderCard(card);
        addCardPopup.close();
      })
      .catch((err) => console.error(err))
      .finally(() => {
        addCardPopup.hideLoading();
      });
  },
  "Saving..."
);

addCardPopup.close();
addCardPopup.setEventListener();

profileAddButton.addEventListener("click", () => {
  addFormValidator.resetValidation();
  addCardPopup.open();
});

// =============================================================================
// Delete Card Popup
// =============================================================================

const deleteCardPopup = new PopupWithConfirmation("#delete-card-modal");

// =============================================================================
// Profile Avatar
// =============================================================================

const avatarEditButton = document.querySelector(".profile__image-overlay");
const profileAvatar = document.querySelector("#profile-avatar");
const avatarEditFormButton = avatarEditModal.querySelector(".modal__button");

const editAvatarPopup = new PopupWithForm(
  "#edit-avatar-modal",
  (inputValues) => {
    editAvatarPopup.showLoading();
    api
      .then(() => {
        profileAvatar.src = inputValues.link;
        editAvatarPopup.close();
      })
      .catch((err) => console.error(err))
      .finally(() => {
        editAvatarPopup.hideLoading();
      });
  },
  "Saving..."
);

avatarEditButton.addEventListener("click", () => {
  editAvatarValidator.disableButton();
  editAvatarPopup.open();
});
