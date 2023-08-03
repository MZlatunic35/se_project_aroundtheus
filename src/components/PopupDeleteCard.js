import Popup from "./Popup.js";

export default class PopupDeleteCard extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._popupSubmitButton = this._popupElement.querySelector(
      ".modal__button-delete"
    );
  }

  _handleSubmitButton = (cardElement) => {
    cardElement.remove();
    this.close(cardElement);
  };

  _setEventListeners(cardElement) {
    super._setEventListeners();
    this._popupSubmitButton.addEventListener("click", this._handleSubmitButton(cardElement));
  }

  open(cardElement) {
    super.open();
    this._setEventListeners(cardElement);
  }

  close() {
    super.close();
    this._popupSubmitButton.removeEventListener(
      "click",
      this._handleSubmitButton(cardElement)
    );
  }
}
