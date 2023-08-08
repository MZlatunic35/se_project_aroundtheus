export default class UserInfo {
  constructor({ nameSelector, professionSelector, avatarSelector }) {
    this._name = document.querySelector(nameSelector);
    this._profession = document.querySelector(professionSelector);
    this._avatarElement = document.querySelector(avatarSelector);
  }
  getUserInfo() {
    return {
      name: this._name.textContent,
      profession: this._profession.textContent,
      avatar: this._avatarElement,
    };
  }

  setUserInfo({ name, profession }) {
    this._name.textContent = name;
    this._profession.textContent = profession;
  }

  setAvatarInfo(avatar) {
    this._avatarElement.src = avatar;
  }
}
