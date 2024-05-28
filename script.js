$(document).ready(function(){
    
})
$('form').on('submit', function(e){
    e.preventDefault()
    const nome = $('#nome').val()
    const text = $('#descricao').val()


    //criando linha 
    let linha = $('<li> </li>')
    $(`<div id="div-lista"><p id="local-nome"></p><p id="local-data"></p></div>`).appendTo(linha)
    $(`<textarea name="descricao" id="local-descricao" ></textarea>`).appendTo(linha)
    $(linha).appendTo('ol')
    $(linha).fadeIn(6000)
    

    // resolver o add errado das linhas 
    // limpar as linhas
    

    //adicionando o nome 
    $('#local-nome').text(nome)


    //adicionando a descrição
    $('#local-descricao').text(text)


    // convertendo a data para o padrão dd/mm/aaaa
    let data = $('#data').val()
    if (data){
        let parte = data.split("-")
        let ano = parte[0]
        let mes = parte[1]
        let dia = parte[2]
        let dataformatada = `${dia}/${mes}/${ano}`   
        $('#local-data').text(dataformatada)
    }else{
        alert('data invalida digite uma nova data ')
    }
    })

    