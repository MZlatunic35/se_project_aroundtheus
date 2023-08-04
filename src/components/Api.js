export default class Api {
  constructor(options) {
    this._url = options.baseUrl;
    this._headers = options.headers;
  }

  getUserInfo() {
    return fetch(`${this._url}/cards`, {
      headers: this._headers,
    }).then(this._processResponse);
  }

  getInitialCards() {
    return fetch(`${this._url}/cards`, {
      headers: this._headers,
    }).then(this._processResponse);
  }

  editProfile(inputValues) {
    return fetch(`${this._url}/users.me`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        name: inputValues.name,
        about: inputValues.profession,
      }),
    }).then(this._processResponse);
  }
  addNewCard(cardData) {
    return fetch(`${this._url}/cards`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        name: cardData.name,
        link: cardData.link,
      }),
    }).then(this._processResponse);
  }

  deleteCard(cardID) {
    return fetch(`${this._url}/cards/${cardID}`, {
      method: "DELETE",
      headers: this._headers,
    }).then(this._processResponse);
  }

  likeCard() {
    return fetch(`${this._url}/cards/likes/${cardID}`, {
      method: "PUT",
      headers: this._headers,
    }).then(this._processResponse);
  }

  unlikeCard() {
    return fetch(`${this._url}/cards/likes/${cardID}`, {
      method: "DELETE",
      headers: this._headers,
    }).then(this._processResponse);
  }

  updateProfilePicture(inputValues) {
    return fetch(`${this._url}/users/me/avatar`, {
      method: "PATCH",
      headers: this._header,
      body: JSON.stringify({
        avatar: inputValues.link,
      }),
    }).then(this._processResponse);
  }

  _processResponse = (res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Error: ${res.status}`);
  };
}
