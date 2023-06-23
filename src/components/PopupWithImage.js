import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor({ popupSelector }) {
    super({ popupSelector });
  }

  open({ link, name }) {
    this._popupElement.querySelector(".modal__preview-footer").textContent =
      name;
    const image = this._popupElement.querySelector(".modal__preview-image");
    image.src = link;
    image.alt = name;
    super.open();
  }
}
