window.onload = () => {
  addSlide();
};

function addSlide() {
  console.log(document);
  document.getElementById("p3").appendChild(document.createTextNode("testes"));
}
