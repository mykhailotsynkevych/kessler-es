(() => {
  const refs = {
    openModalBtn: document.querySelectorAll("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    backdrop: document.querySelector("[data-backdrop]"),
    modal: document.querySelector("[data-modal]"),
  };

  refs.openModalBtn.forEach(btn => {
    btn.addEventListener("click", toggleModal);
  });

  refs.closeModalBtn.addEventListener("click", toggleModal);
  refs.backdrop.addEventListener("click", event => {
    if (event.target === refs.backdrop) {
      toggleModal();
    }
  });

  function toggleModal() {
    refs.backdrop.classList.toggle("is-hidden");
  }
})();