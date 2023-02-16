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
  div: document.getElementById("app"),
  input: document.getElementById("ex"),
  inputtwo: document.getElementById("box"),
};

DOMSelectors.clear.addEventListener("click", function () {
  DOMSelectors.input.innerHTML = "";
});

let x = DOMSelectors.input.value;
let y = DOMSelectors.inputtwo.value;
function add(x, y) {
  DOMSelectors.div.insertAdjacentHTML(
    "afterbegin",
    `<p>${x * y}x^${y - 1}</p>`
  );
  return x + y;
}

DOMSelectors.submit.addEventListener("click", function () {
  add(x, y);
});
console.log(add(x, y));
