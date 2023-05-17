const openPopup = (modal) => {
  modal.classList.add("modal_opened");
  document.addEventListener("keydown", closeModalWithEsc);
};

const closePopup = (modal) => {
  modal.classList.remove("modal_opened");
  document.removeEventListener("keydown", closeModalWithEsc);
};

const closeModalWithEsc = (e) => {
  if (e.key === "Escape") {
    const activeModal = document.querySelector(".modal_opened");
    closePopup(activeModal);
  }
};

export { openPopup, closePopup, closeModalWithEsc };
