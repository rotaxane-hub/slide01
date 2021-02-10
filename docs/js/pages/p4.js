window.onload = () => {
  addSlide();
};

function addSlide() {
  console.log(document);
  document.getElementById("p4").appendChild(document.createTextNode("testes"));
}
