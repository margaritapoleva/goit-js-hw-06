function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

const bodyEl = document.querySelector("body");
const buttonEl = document.querySelector(".change-color");
const colorName = document.querySelector(".color");


buttonEl.addEventListener("click", (event) => {
  bodyEl.style.backgroundColor = getRandomHexColor();

  console.log(getRandomHexColor())

  colorName.textContent = getRandomHexColor();
})
