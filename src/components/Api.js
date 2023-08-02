export default class Api {
  constructor(options) {
    this._url = options.url;
    this._headers = options.headers;
  }

  getUserInfo() {
    return fetch(`${this._url}/cards`, {
      headers: this._headers,
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Error: ${res.status}`);
    });
  }

  getInitialCards() {
    return fetch(`${this._url}/cards`, {
      headers: this._headers,
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Error: ${res.status}`);
    });
  }

  editProfile(inputValues) {
    fetch(`${this._url}/users.me`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        name: inputValues.name,
        about: inputValues.profession,
      }),
    });
  }
  addNewCard(cardData) {
    fetch(`${this._url}/cards`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        name: cardData.name,
        link: cardData.link,
      }),
    });
  }

  deleteCard() {
    fetch("https://around-api.en.tripleten-services.com/v1/cards/${cardID}", {
      method: "DELETE",
      headers: {
        authorization: "90cd17e6-c5e4-4b6c-8c3c-48c1c89f20fe",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: "Marie Skłodowska Curie",
        link: "Physicist and Chemist",
      }),
    });
  }

  likeCard() {
    fetch(
      "https://around-api.en.tripleten-services.com/v1/cards/${cardID}/likes",
      {
        method: "PUT",
        headers: {
          authorization: "90cd17e6-c5e4-4b6c-8c3c-48c1c89f20fe",
          "Content-Type": "application/json",
        },
      }
    );
  }

  unlikeCard() {
    fetch(
      "https://around-api.en.tripleten-services.com/v1/cards/${cardID}/likes",
      {
        method: "DELETE",
        headers: {
          authorization: "90cd17e6-c5e4-4b6c-8c3c-48c1c89f20fe",
          "Content-Type": "application/json",
        },
      }
    );
  }

  updateProfilePicture() {
    return fetch("https://around-api.en.tripleten-services.com/v1/users/me", {
      method: "POST",
      headers: {
        authorization: "90cd17e6-c5e4-4b6c-8c3c-48c1c89f20fe",
      },
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Error: ${res.status}`);
    });
  }
}

const api = new Api({
  baseUrl: "https://around-api.en.tripleten-services.com/v1",
  headers: {
    authorization: "c56e30dc-2883-4270-a59e-b2f7bae969c6",
    "Content-Type": "application/json",
  },
});

// Cards should be rendered after the user information is received from the server.
// Сreate a function in Api.js and return the Promise.all() method.
// Pass the array of function calls for getting user information and t
// he list of cards to Promise.all() as a parameter.
/* ------------------------------------ - ----------------------------------- */
