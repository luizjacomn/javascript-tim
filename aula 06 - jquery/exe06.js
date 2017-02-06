var i = 1;
var mensagem = '';
var valor = 0;
var sorteado = '';

$(document).ready(function() {
    $('#sorteio').click(function() {
        $('#resultado h4').remove();

        if (i == 1) {
            $('div').css({
                'margin': '10px',
                'border-top': '1px solid #333',
                'padding': '5px'
            });
        }

        valor = Math.floor(Math.random() * 60) + 1;
        mensagem = '<h4>' + valor + '</h4>';
        sorteado = '<li>Bolinha #' + i + ' = <strong>' + valor + '</strong></li>';

        $('#resultado').append(mensagem);
        $('#resultados ul').append(sorteado);
        if (i < 6) {
            i++;
        } else {
            $('#sorteio').css({
                'pointer-events': 'none',
                'background': '#aaa'
            });
        }
    });
});
