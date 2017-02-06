function clique() {
  var fundo = document.getElementById("fundo").style;
  var aleatorio = Math.round(Math.random());
  console.log(aleatorio);
  if (aleatorio % 2 == 0) {
    fundo.backgroundColor = "#000";
  } else {
    fundo.backgroundColor = "#fff";
  }
}

function troca(cor) {
  var circulo = document.getElementById("circulo").style;
  if(cor == "vermelho") {
    circulo.backgroundColor = "#b32020";
  } else if(cor == "verde") {
    circulo.backgroundColor = "#086759";
  } else {
    circulo.backgroundColor = "#0f85b1";
  }
}
