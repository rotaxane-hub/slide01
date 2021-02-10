window.onload = () => {
  addSlide();
};

function addSlide() {
  console.log(document);
  document.getElementById("p5").appendChild(document.createTextNode("testes"));
}
