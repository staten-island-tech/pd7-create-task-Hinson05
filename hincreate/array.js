const rules = [
  {
    type: "Product Rule",
    image:
      "https://calcworkshop.com/wp-content/uploads/product-rule-formula.png",
  },
  {
    type: "Quotient Rule",
    image:
      "https://calcworkshop.com/wp-content/uploads/quotient-rule-formula.png",
  },
  {
    type: "Power Rule",
    image: "https://calcworkshop.com/wp-content/uploads/power-rule-formula.png",
  },
];

const trig = [{ type: "sinx" }, { type: "cosx" }, { type: "tanx" }];

const DOMSelectors = {
  app: document.getElementById("app"),
}

function insert() {
  rules.forEach((element) =>
    DOMSelectors.app.insertAdjacentHTML(
      "beforeend",
      `<div><p>${element.type}</p> <img id="image" src="${element.image}"></div>`
    )
  );
}
