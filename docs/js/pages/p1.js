import Reveal from "../../dist/reveal.esm.js";

const pageIndex = 1;

Reveal.initialize();

Reveal.on("slidechanged", (event) => {
  event.indexh === pageIndex && addSlide();
  // event.previousSlide, event.currentSlide, event.indexh, event.indexv
});

function addSlide() {
  const divElement = document.getElementById("p" + pageIndex);
  divElement.innerHTML = "";
  divElement.appendChild(document.createTextNode("testes"));
}
