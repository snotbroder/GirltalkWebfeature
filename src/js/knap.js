const button = document.querySelector(".hero-button");
button.addEventListener("mousedown", clickButton);

function clickButton() {
  console.log("clickButton");
  document.getElementById("items").style.display = "inherit";
}

const taske = document.querySelector(".taske");
const item = document.querySelectorAll(".item");

taske.addEventListener("mouseover", hoverTaske);
function hoverTaske() {
  console.log("hoverTaske");
  document.getElementById("comp_knap").style.display = "none";
  taske.addEventListener("mouseout", mouseoutTaske);
}
function mouseoutTaske() {
  console.log("mouseoutTaske");
  document.getElementById("comp_knap").style.display = "inherit";
}
