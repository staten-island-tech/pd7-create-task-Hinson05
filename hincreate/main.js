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
  input: document.getElementById("ex"),
  inputtwo: document.getElementById("box"),
  submit: document.getElementById("enter"),
};

DOMSelectors.clear.addEventListener("click", function () {
  DOMSelectors.input.innerHTML = "";
});

let x = DOMSelectors.input.value;
let y = DOMSelectors.inputtwo.value;
function power(x, y) {
  DOMSelectors.div.insertAdjacentHTML("afterend", `<p>${x * y}x^${x - 1}</p>`);
}

DOMSelectors.submit.addEventListener("click", function () {
  power(x, y);
  console.log(`${x * y}x^${x - 1}`);
});
