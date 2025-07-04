const eventModal = document.querySelector(".events-modal-overlay");
const closeButton = document.querySelector(".events-close-button");
const modalTitle = document.querySelector(".events-modal-text");

let scrollTop = 0;

function openModal(eventName) {
    scrollTop = window.scrollY;

    modalTitle.textContent = eventName;

    eventModal.classList.add("is-open");
    document.body.classList.add("modal-open"); // scroll blocked
    document.documentElement.classList.add("modal-open");
    document.body.style.top = `-${scrollTop}px`;
    document.body.style.position = 'fixed';
    document.body.style.width = '100%';
  }

function closeModal() {
    eventModal.classList.remove("is-open");
    document.body.classList.remove("modal-open");
    document.documentElement.classList.remove("modal-open");
  
    document.body.style.position = '';
    document.body.style.width = '';
  
    const scrollY = parseInt(document.body.style.top || '0') * -1;
    document.body.style.top = '';
    window.scrollTo(0, scrollY);
}

// Закриття по кліку на backdrop
eventModal.addEventListener("click", (event) => {
    if (event.target === eventModal) {
      closeModal();
    }
});
  
  // Закриття по натисканню Escape
window.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeModal();
    }
}); 

closeButton.addEventListener("click", closeModal);

const registerButtons = document.querySelectorAll(".events-list-button");

registerButtons.forEach(button => {
    button.addEventListener("click", (e) => {
      const card = e.currentTarget.closest(".swiper-slide");
      const title = card.querySelector(".events-list-header").textContent.trim();
      openModal(title);
    });
  });
