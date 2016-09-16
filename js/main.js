window.addEventListener("load", function() {
  var boton = document.getElementById("enviar");
  var contador = 1;
  boton.addEventListener("click", function() {

  if(contador == 1){
  document.getElementsByClassName("circle")[0].style.borderColor = "yellow";
  document.getElementById("color").placeholder = "Red"
  document.getElementsByClassName("circle")[1].style.borderColor = "black";
  document.getElementsByClassName("circle")[2].style.borderColor = "black";
 }

 if(contador == 2){
  document.getElementsByClassName("circle")[1].style.borderColor = "yellow";
  document.getElementById("color").placeholder = "Green"
  document.getElementsByClassName("circle")[0].style.borderColor = "black";
  document.getElementsByClassName("circle")[2].style.borderColor = "black";
 }

 if(contador == 3){
  document.getElementsByClassName("circle")[2].style.borderColor = "yellow";
  document.getElementById("color").placeholder = "Yellow"
  document.getElementsByClassName("circle")[0].style.borderColor = "black";
  document.getElementsByClassName("circle")[1].style.borderColor = "black";

  contador = 0;
 }

 contador++;

});
  });


