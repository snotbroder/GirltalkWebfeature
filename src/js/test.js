window.addEventListener("load", sidenVises);
const clickable = document.querySelectorAll;
const klikbar = document.getElementsByClassName("p_piller");

function sidenVises() {
  kondom.addEventListener("mousedown", clicked);
  piller.addEventListener("mousedown", clicked);
  klikbar.addEventListener("mousedown", clicked);
}

function clicked() {
  this.classList.add("clicked");
}
