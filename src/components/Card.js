export default class Card {
  constructor(
    data,
    cardSelector,
    handleImageClick,
    handleDeleteClick,
    userID,
    handleCardLike,
    handleCardUnLike
  ) {
    this._name = data.name;
    this._link = data.link;
    this._owner = data.owner;
    this._cardID = data._id;
    this._userID = userID;
    this._cardLike = data.likes;
    this._cardSelector = cardSelector;
    this._handleImageClick = handleImageClick;
    this._handleDeleteClick = handleDeleteClick;
    this._handleCardLike = handleCardLike;
    this._handleCardUnLike = handleCardUnLike;
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
      this._handleDeleteClick(this._cardID);
    });

    this._likeNumber = this._cardElement.querySelector(".card__like-number");
  }

  _handleLikeIcon() {
    this._cardElement
      .querySelector(".card__like-button")
      .classList.toggle("card__like-button_active");
    this._checkCardLike();
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
    this._likeButton = this._cardElement.querySelector(".card__like-button");
    this._deleteButton = this._cardElement.querySelector(
      ".card__delete-button"
    );
    this._likeNumber = this._cardElement.querySelector(".card__like-number");

    this._cardTitleEl.textContent = this._name;
    this._cardImageEl.alt = this._name;
    this._cardImageEl.src = this._link;

    this._setEventListeners();

    if (this._owner._id != this._userID) {
      this._deleteButton.remove();
    }

    this.dislpayCardLike(this._cardLike);

    return this._cardElement;
  }

  removeCard() {
    this._cardElement.remove();
  }

  updateCardLike(cardLike) {
    this._cardLike = cardLike;
    this.displayCardLike(cardLike);
  }

  dislpayCardLike(cardLike) {
    this._likeNumber.textContent = cardLike.length;
    if (this._isLiked(cardLike)) {
      this._likeButton.classList.add("card__like-button_active");
    } else {
      this._likeButton.classList.remove("card__like-button_active");
    }
  }

  _handleLikeButton() {
    if (this._isLiked(this._cardLike)) {
      this._handleCardUnLike(this._cardID);
    } else {
      this._handleCardLike(this._cardID);
    }
  }

  _isLiked(cardLikes) {
    return cardLikes.some((cardLikes) => cardLikes._id === this._userID);
  }
}
