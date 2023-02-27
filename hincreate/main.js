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
  power: document.getElementById("Power"),
  quotient: document.getElementById("Quotient"),
  product: document.getElementById("Product"),
  inputthree: document.getElementById("in"),
  inputfour: document.getElementById("out"),
};

DOMSelectors.clear.addEventListener("click", function () {
  DOMSelectors.input.innerHTML = "";
});

let x = DOMSelectors.input.value;
let y = DOMSelectors.inputtwo.value;
function power(x, y) {
  DOMSelectors.div.insertAdjacentHTML("afterend", `<p>${x * y}x^${x - 1}</p>`);
}

DOMSelectors.power.addEventListener("click", function () {
  power(x, y);
  console.log(`${x * y}x^${x - 1}`);
});
DOMSelectors.power.addEventListener("click", function () {
  power(x, y);
});

let w = DOMSelectors.inputthree.value;
let z = DOMSelectors.inputfour.value;
function quotient(x, y, w, z) {
  DOMSelectors.div.insertAdjacentHTML(
    "afterend",
    `<p>((${w}x^${z})(${x * y}x^${x - 1}) - (${x}x^${y})(${w * z}x^${
      z - 1
    }))/(${w}x^${z})^2</p>`
  );
}

DOMSelectors.quotient.addEventListener("click", function () {
  quotient(x, y, w, z);
});
function product(x, y, w, z) {
  DOMSelectors.div.insertAdjacentHTML(
    "afterend",
    `<p>(${x * y}x^${x - 1})</p>`
  );
}

DOMSelectors.product.addEventListener("click", function () {
  product(x, y, w, z);
});
