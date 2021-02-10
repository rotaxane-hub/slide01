window.onload = () => {
  addSlide();
};

function addSlide() {
  console.log(document);
  document.getElementById("p6").appendChild(document.createTextNode("testes"));
}
