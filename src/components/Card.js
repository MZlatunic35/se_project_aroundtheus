export default class Card {
  constructor(
    { name, link },
    cardSelector,
    handleImageClick,
    handleDeleteClick,
    userID
  ) {
    this._name = name;
    this._link = link;
    this._owner = data.owner;
    this._id = data._id;
    this.cardID = data._id;
    this._userID = userID;
    this._cardSelector = cardSelector;
    this._handleImageClick = handleImageClick;
    this._handleDeleteClick = handleDeleteClick;
  }

  _setEventListeners() {
    this._cardElement
      .querySelector(".card__like-button")
      .addEventListener("click", () => {
        this._handleLikeIcon();
      });
    this._cardElement
      .querySelector(".card__delete-button")
      .addEventListener("click", () => {
        this._handleDeleteCard();
      });

    this._cardImageEl.addEventListener("click", () => {
      this._handleImageClick({ name: this._name, link: this._link });
    });

    this._deleteButton.addEventListener("click", () => {
      this._handleDeleteClick(this.getView());
    });
  }

  _handleLikeIcon() {
    this._cardElement
      .querySelector(".card__like-button")
      .classList.toggle("card__like-button_active");
  }

  _handleDeleteCard() {
    this._cardElement.remove();
    this._cardElement = null;
  }

  _getTemplate() {
    return document
      .querySelector(this._cardSelector)
      .content.querySelector(".card")
      .cloneNode(true);
  }

  getView() {
    this._cardElement = this._getTemplate();

    this._cardImageEl = this._cardElement.querySelector(".card__image");
    this._cardTitleEl = this._cardElement.querySelector(".card__title");

    this._cardTitleEl.textContent = this._name;
    this._cardImageEl.alt = this._name;
    this._cardImageEl.src = this._link;

    this._setEventListeners();

    if (this._owner._id != this._userID) {
      this._deleteButton.remove();
    }
    return this._cardElement;
  }
}
