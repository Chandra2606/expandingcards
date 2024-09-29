const panels = document.querySelectorAll(".panel");

function toggleActiveClass(clickedPanel) {
  panels.forEach(panel => {
    if (panel === clickedPanel) {
      panel.classList.add("active");
    } else {
      panel.classList.remove("active");
    }
  });
}

panels.forEach(panel => {
  panel.addEventListener("click", () => toggleActiveClass(panel));
});
