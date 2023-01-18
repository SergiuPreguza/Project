const liElements = document.getElementsByClassName("checkbox");
const pressedLi = e => {
  let text = e.target.innerHTML;
  navigator.clipboard.writeText(text);
}
for (let li of liElements) {
  li.addEventListener("click", pressedLi);
};