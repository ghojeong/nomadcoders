const title = document.querySelector("#title");
const BASE_COLOR = "red";
const OTHER_COLOR = "blue";

function handleMouseEnter() {
  const titleColor =
    title.style.color === BASE_COLOR ? OTHER_COLOR : BASE_COLOR;
  console.log(titleColor);
  title.style.color = titleColor;
}

function init() {
  title.style.color = "BASE_COLOR";
  title.addEventListener("mouseenter", handleMouseEnter);
}

init();
