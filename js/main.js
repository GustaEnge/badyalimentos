var slideIndex = 1;
var tableIndex = 1;
//var json = require('*/js/produtos.json');
showSlides(slideIndex);
//populaTable();

function plusSlides(n) {
  showSlides(slideIndex += n);
  //populaTable();
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("prod");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";

}
function populaTable()
{
  $.getJSON
  var table = document.getElementById("tabela_prod");
  tableIndex = slideIndex;

  if (tableIndex == 1)
  {
    var row = table.insertRow(0);
    var cell1 = row.insertCell(0);
    var cell2 =
    cell1.innerHTML = json.tradicional.nome;
  }
 else
  {
    var row = table.insertRow(4);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    cell3.innerHTML = "QUANTIDADE POR PORÇÃO"
    cell1.innerHTML = "Informação Nutricional"; //aqui colocar um css para ocupar as 2 células
    cell2.innerHTML = "Porção de 50g (Aprox. 1 Unidade)";
    cell3.innerHTML = "QUANTIDADE POR PORÇÃO";
    cell4.innerHTML = "%VD(*)";
    cell5.innerHTML = "Valor Calórico";

  }

  //let value = prompt("Insert a number to find Solution")


}

function insereTable()
{

}
