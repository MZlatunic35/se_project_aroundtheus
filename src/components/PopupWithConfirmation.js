import Popup from "./Popup.js";

export default class PopupWithConfirmation extends Popup {
  constructor(popupSelector) {
    super({ popupSelector });
    this._submitButton = this._popupElement.querySelector(".modal__button");
  }

  setSubmitAction(callBack) {
    this._handleSubmit = callBack;
  }

  setLoading(isLoading, originalText) {
    if (isLoading) {
      this._submitButton.textContent = "Deleting...";
    } else {
      this._submitButton.textContent = originalText;
    }
  }

  _setEventListeners() {
    super._setEventListeners();
    this._submitButton.addEventListener("click", this._handleSubmit);
  }
}
