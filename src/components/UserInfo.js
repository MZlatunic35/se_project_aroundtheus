export default class UserInfo {
  constructor({ nameSelector, professionSelector, avatarSelector }) {
    this._title = document.querySelector(nameSelector);
    this._description = document.querySelector(professionSelector);
    this._avatarElement = document.querySelector(avatarSelector);
  }
  getUserInfo() {
    return {
      title: this._title.textContent,
      description: this._description.textContent,
      avatar: this._avatarElement,
    };
  }

  setUserInfo({ title, description }) {
    this._title.textContent = title;
    this._description.textContent = description;
  }

  setAvatarInfo(avatar) {
    this._avatarElement.src = avatar;
  }
}
