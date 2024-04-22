window.addEventListener("load", sidenVises);
const clickable = document.querySelectorAll;

function sidenVises() {
  // desktop
  p1.addEventListener("mousedown", clicked);
  k1.addEventListener("mousedown", clicked);
  t1.addEventListener("mousedown", clicked);
  p2.addEventListener("mousedown", clicked);
  c1.addEventListener("mousedown", clicked);
  l1.addEventListener("mousedown", clicked);
  b1.addEventListener("mousedown", clicked);
  s1.addEventListener("mousedown", clicked);
  s2.addEventListener("mousedown", clicked);

  //   mobile
  mp1.addEventListener("mousedown", clicked);
  mk1.addEventListener("mousedown", clicked);
  mt1.addEventListener("mousedown", clicked);
  mp2.addEventListener("mousedown", clicked);
  mc1.addEventListener("mousedown", clicked);
  ml1.addEventListener("mousedown", clicked);
  mb1.addEventListener("mousedown", clicked);
  ms1.addEventListener("mousedown", clicked);
  ms2.addEventListener("mousedown", clicked);
}

function clicked() {
  this.classList.add("clicked");
}
