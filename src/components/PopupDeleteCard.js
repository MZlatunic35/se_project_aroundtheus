import Popup from "./Popup.js";

export default class PopupDeleteCard extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._popupSubmitButton = this._popupElement.querySelector(
      ".modal__button-delete"
    );
  }

  setSubmitAction(callBack) {
    this._handleSubmit = callBack;
  }

  _handleSubmit = () => {
    this.close();
  };

  _setEventListeners() {
    super._setEventListeners();
    this._popupSubmitButton.addEventListener("click", this._handleSubmit);
  }
}
