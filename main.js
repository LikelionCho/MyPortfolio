function revealMyInfo(myName, className, color) {
  let htmlElement = document.querySelector(className);

  htmlElement.innerHTML = myName;
  htmlElement.style.color = color;
}
