import Popup from "./Popup.js";

export default class PopupDeleteCard extends Popup {
  constructor(popupSelector, cardElement) {
    super(popupSelector);
    this._popupSubmitButton = this._popupElement.querySelector(
      ".modal__button-delete"
    );
    this._card = cardElement;
  }

  _handleSubmitButton = () => {
    this._card.remove();
    this.close();
  };

  _setEventListeners() {
    super._setEventListeners();
    this._popupSubmitButton.addEventListener("click", this._handleSubmitButton);
  }

  close() {
    super.close();
    this._popupSubmitButton.removeEventListener(
      "click",
      this._handleSubmitButton
    );
  }
}
