const clockContainer = document.querySelector(".js-clock"),
  clockTitle = clockContainer.querySelector("h1");

function format(num) {
  return num < 10 ? `0${num}` : num;
}

function getTime() {
  const date = new Date();
  const minutes = format(date.getMinutes());
  const hours = format(date.getHours());
  const seconds = format(date.getSeconds());
  return `${hours}:${minutes}:${seconds}`;
}

function updateTime() {
  clockTitle.innerText = getTime();
}

function init() {
  setInterval(updateTime, 1000);
}

init();
