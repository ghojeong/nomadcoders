const title = document.querySelector("#title");
const CLICKED_CLASS = "clicked";

function handleClick() {
  const titleClassList = title.classList;
  console.log(titleClassList);
  //   if (!titleClassList.contains(CLICKED_CLASS)) {
  //     titleClassList.add(CLICKED_CLASS);
  //   } else {
  //     titleClassList.remove(CLICKED_CLASS);
  //   }
  titleClassList.toggle(CLICKED_CLASS);
}

function init() {
  title.addEventListener("click", handleClick);
}

init();
