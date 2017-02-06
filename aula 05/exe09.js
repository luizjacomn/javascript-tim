var adicionar = document.getElementById("adicionar");
var sortear = document.getElementById("sortear");
var citar = document.getElementById("citar");
var fundo = document.getElementById("fundo").style;
var contador = 0;
var novoNumero = 0;

var citacoes = [];
citacoes[0] = "Citação 01";
citacoes[1] = "Citação 02";
citacoes[2] = "Citação 03";
citacoes[3] = "Citação 04";

var cores = [];
cores[0] = "#f03432";
cores[1] = "#10633e";
cores[2] = "#0b7b99";
cores[3] = "#1f21de";

var rgba = "rgba("
+
Math.floor(Math.random() * 255) + "," +
Math.floor(Math.random() * 255) + "," +
Math.floor(Math.random() * 255) + "," +
Math.random()
+
")";

adicionar.addEventListener('click', adicionarItem, false);
sortear.addEventListener('click', sortearItem, false);
citar.addEventListener('click', citarItem, false);

function adicionarItem() {
  contador++;
  rgba = "rgba("
  +
  Math.floor(Math.random() * 255) + "," +
  Math.floor(Math.random() * 255) + "," +
  Math.floor(Math.random() * 255) + "," +
  Math.random()
  +
  ")";

  fundo.backgroundColor = rgba;
  alert("Contador: " + contador + "\n" + "Cor: " + rgba);
}

function sortearItem() {
  novoNumero = Math.floor(Math.random() * 20);
  var colorir = Math.floor(Math.random() * cores.length);
  fundo.backgroundColor = cores[colorir];
  alert("Sorteio [0 - 20]: " + novoNumero + "\n" + "Nova Cor: " + cores[colorir]);
}

function citarItem() {
  novoNumero = Math.floor(Math.random() * citacoes.length);
  alert("\"" + citacoes[novoNumero] + "\"");
}
