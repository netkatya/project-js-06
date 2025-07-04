import Accordion from "accordion-js";
import "accordion-js/dist/accordion.min.css";


const accordionTriggers = document.querySelectorAll(".ac-trigger");

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