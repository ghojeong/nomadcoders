console.log("Hello world!");

// const title = document.getElementById("title");
const title = document.querySelector("#title");
title.innerHTML = "Put Html like this";
title.style.color = "red";

console.log(title);
console.dir(title);

document.title = "Hello World";

window.addEventListener("resize", function (event) {
  console.log(event);
});

title.addEventListener("click", function () {
  console.log(title.style.color);
  title.style.color = title.style.color === "blue" ? "red" : "blue";
});

const age = prompt("How old are you");
console.log(age);
