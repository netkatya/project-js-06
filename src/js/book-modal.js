import Accordion from "accordion-js";
import "accordion-js/dist/accordion.min.css";


const accordionTriggers = document.querySelectorAll(".ac-trigger");
const minusButton = document.querySelector(".minus-button");
const plusButton = document.querySelector(".plus-button");
const input = document.querySelector(".quantity-buttons-input");

accordionTriggers.forEach(trigger => {
  trigger.addEventListener("click", () => {
    const accordionItem = trigger.closest(".ac");
    const panel = accordionItem.querySelector(".ac-panel");
    const isActive = accordionItem.classList.contains("is-active");


    document.querySelectorAll(".ac").forEach(item => {
      item.classList.remove("is-active");
      const p = item.querySelector(".ac-panel");
      p.style.maxHeight = null;
    });

   
    if (!isActive) {
      accordionItem.classList.add("is-active");
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
});

minusButton.addEventListener("click", () => {
  let currentValue = parseInt(input.value);
  if (currentValue > 1) {
    input.value = currentValue - 1;
  }
});

plusButton.addEventListener("click", () => {
  let currentValue = parseInt(input.value);
  input.value = currentValue + 1;
});