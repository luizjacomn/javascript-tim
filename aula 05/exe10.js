var numero = 0;
var tela = document.getElementById("tela");
var tempo = setInterval(
    function() {
        numero++;
        tela.innerHTML = numero;
        if (numero == 10) {
            clearInterval(tempo);
            tela.innerHTML = "Tempo esgotado!";
        }}, 1000);
