const button = document.querySelector(".hero-button");
button.addEventListener("mousedown", clickButton);

function clickButton() {
  console.log("clickButton");
  document.getElementById("items").style.display = "inherit";
}

const taske = document.querySelector(".taske");
const item = document.querySelectorAll(".item");
