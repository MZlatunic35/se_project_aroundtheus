import Popup from "./Popup.js";

export default class PopupWithConfirmation extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._popupSubmitButton = this._popupElement.querySelector(
      ".modal__button-delete"
    );
  }

  setSubmitAction(callBack) {
    this._handleSubmit = callBack;
  }

  _setEventListeners() {
    super._setEventListeners();
    this._popupSubmitButton.addEventListener("click", this._handleSubmit);
  }
}
