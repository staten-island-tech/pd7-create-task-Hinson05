import { rules } from "./array.js";
const DOMSelectors = {
    end: document.getElementById("end"),
  }
  
  function insert() {
    rules.forEach((element) =>
      DOMSelectors.end.insertAdjacentHTML(
        "afterend",
        `<div id= "app"><p>${element.type}</p> <img id="image" src="${element.image}"></div>`
      )
    );
  }
  insert();
  