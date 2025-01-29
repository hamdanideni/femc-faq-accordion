const accordionPanel = document.querySelectorAll(".accordion__panel");
const accordionContainer = document.querySelector(".accordion-container");

accordionContainer.addEventListener("click", function (e) {
  const clicked = e.target.closest(".accordion__panel-heading");

  if (!clicked) return;
  clicked.closest(".accordion__panel").classList.toggle("active");
});

accordionPanel.forEach((a, index) => {
  const panelHeading = a.querySelector(".accordion__title");
  panelHeading.setAttribute("tabindex", "-1");

  panelHeading.addEventListener("keydown", function (e) {
    e.preventDefault();
    if (e.key === "ArrowDown" || e.key === "ArrowUp") {
      const newIndex = e.key === "ArrowDown" ? index + 1 : index - 1;

      if (index >= 0 && newIndex < accordionPanel.length)
        accordionPanel[newIndex].querySelector(".accordion__title").focus();
    }

    if (e.key === "Enter") {
      const panelTarget = panelHeading.closest(".accordion__panel");
      panelTarget.classList.toggle("active");
    }
  });
});
