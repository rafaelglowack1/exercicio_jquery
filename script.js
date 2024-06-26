$(document).ready(function(){
    $('form').on('submit', function(e){
        e.preventDefault();
        const nome = $('#nome').val();
        let data = $('#data').val();

        let linha = $('<li></li>');
        let divLista = $('<div class="lista"></div>');
        let nomeParagrafo = $('<p class="local-nome"></p>').text(nome);
        let dataParagrafo = $('<p class="local-data"></p>').text(formatarData(data));

        divLista.append(nomeParagrafo);
        divLista.append(dataParagrafo);

        linha.append(divLista);

        $('ol').append(linha);

        $('#nome').val('');
        $('#data').val('');


    });
    
    $(document).on('click', 'li', function(){
        $(this).toggleClass('selected');
    });

    function formatarData(data){
        if (data){
            let parte = data.split("-");
            let ano = parte[0];
            let mes = parte[1];
            let dia = parte[2];
            return `${dia}/${mes}/${ano}`;
        } else {
            return '';
        }
    }
});


