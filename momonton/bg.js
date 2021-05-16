const body = document.querySelector("body");

const IMG_NUMBER = 3;

function paintImage(imgNumber) {
  const image = new Image();
  image.src = `img/${imgNumber}.jpeg`;
  image.classList.add("bgImage");
  body.appendChild(image);
}

function getRandom() {
  const random = Math.random() * 3;
  return Math.ceil(random);
}

function init() {
  const randomNumber = getRandom();
  paintImage(randomNumber);
}

init();
