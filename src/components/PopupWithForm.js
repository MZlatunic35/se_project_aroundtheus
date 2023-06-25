import Popup from "./Popup.js";

export default class PopupWithFrom extends Popup {
  constructor({ popupSelector, handleFormSubmit }) {
    super({ popupSelector });
    this.popupForm = this._popupElement.querySelector(".modal__form");
    this._handleFormSubmit = handleFormSubmit;
    this._inputList = this._popupElement.querySelectorAll(".modal__input");
    this._handleFormSubmit = handleFormSubmit;
    this._submitButton = this._popupForm.querySelector(
      ".modal__button[type='submit']"
    );
    this._submitButtonText = this._submitButton.textContent;
    this._loadingText = loadingText;
  }

  _handleSubmit = (evt) => {
    evt.preventDefault();
    this._handleFormSubmit(this._getInputValues());
    this.closeModal();
  };

  _getInputValues() {
    this._newData = {};
    this._inputList.forEach((inputElement) => {
      this._newData[inputElement.name] = inputElement.value;
    });
    return this._newData;
  }

  setEventListener() {
    super.setEventListeners();
    this._popupForm.addEventListener("submit", (event) => {
      event.preventDefault();
      this._handleFormSubmit(this._getInputValues());
      this.close();
    });

    super.setEventListeners();
  }

  _removeEventListeners() {
    super._removeEventListeners();
    this._popupForm.removeEventListener("submit", this._handleSubmit);
  }

  open() {
    super.open();
  }

  close() {
    this._popupForm.reset();
    super.close();
  }
}
