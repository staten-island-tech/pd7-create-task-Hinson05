import "./style.css";
const DOMSelectors = {
  zero: document.getElementById("zero"),
  one: document.getElementById("one"),
  two: document.getElementById("two"),
  three: document.getElementById("three"),
  four: document.getElementById("four"),
  five: document.getElementById("five"),
  six: document.getElementById("six"),
  seven: document.getElementById("seven"),
  eight: document.getElementById("eight"),
  nine: document.getElementById("nine"),
  variable: document.getElementById("variable"),
  clear: document.getElementById("clear"),
  exponent: document.getElementById("exponent"),
  div: document.getElementById("div"),
};
function insert() {
  array.forEach((element) =>
    DOMSelectors.div.insertAdjacentHTML(
      "beforeend",
      `<div class="flex"><p id="box">${element.type}</p> <img id="imag" src="${element.image}"></div>`
    )
  );
}
insert();
