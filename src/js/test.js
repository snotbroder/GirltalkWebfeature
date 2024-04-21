window.addEventListener("load", sidenVises);
const clickable = document.querySelectorAll;

function sidenVises() {
  kondom.addEventListener("mousedown", clicked);
  piller.addEventListener("mousedown", clicked);
}

function clicked() {
  this.classList.add("clicked");
}
