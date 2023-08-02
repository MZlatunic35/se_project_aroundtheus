export class Api {
  constructor(options) {
    this._url = options.url;
    this._header = options.header;
  }

  getUserInfo() {
    return fetch("https://around-api.en.tripleten-services.com/v1/users/me", {
      headers: {
        authorization: "90cd17e6-c5e4-4b6c-8c3c-48c1c89f20fe",
      },
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
      // if the server returns an error, reject the promise
      return Promise.reject(`Error: ${res.status}`);
    });
  }

  getInitialCards() {
    return fetch("https://around-api.en.tripleten-services.com/v1/cards", {
      headers: {
        authorization: "90cd17e6-c5e4-4b6c-8c3c-48c1c89f20fe",
      },
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
      // if the server returns an error, reject the promise
      return Promise.reject(`Error: ${res.status}`);
    });
  }

  editProfile() {
    fetch("https://around-api.en.tripleten-services.com/v1/users/me", {
      method: "PATCH",
      headers: {
        authorization: "90cd17e6-c5e4-4b6c-8c3c-48c1c89f20fe",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: "Marie Skłodowska Curie",
        about: "Physicist and Chemist",
      }),
    });
  }
  addNewCard() {
    fetch("https://around-api.en.tripleten-services.com/v1/cards", {
      method: "POST",
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
      // if the server returns an error, reject the promise
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

fetch("https://around-api.en.tripleten-services.com/v1/cards", {
  headers: {
    authorization: "90cd17e6-c5e4-4b6c-8c3c-48c1c89f20fe",
  },
})
  .then((res) => res.json())
  .then((result) => {
    console.log(result);
  });
