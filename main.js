const panels = document.querySelectorAll(".panel");

function toggleOpen() {
  this.classList.toggle("open");
}

function toggleActive(evt) {
  //   console.log(evt.propertyName);
  if (evt.propertyName.includes("flex")) {
    this.classList.toggle("open-active");
  }
  this.classList.toggle("open-active");
}

panels.forEach((panel) => panel.addEventListener("click", toggleOpen));
panels.forEach((panel) =>
  panel.addEventListener("transitionend", toggleActive)
);
