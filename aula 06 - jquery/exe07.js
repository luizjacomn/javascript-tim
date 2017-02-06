$(function($) {
    $('#enviar').click(function() {
        var nome = $('#nome').val();
        var idade = $('#idade').val();

        alert("Nome: " + nome + "\nIdade: " + idade);
    });
});
