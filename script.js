$(document).ready(function(){
    
})
$('form').on('submit', function(e){
    e.preventDefault()
    const nome = $('#nome').val()
    
    let linha = $('<li> </li>')
    $(``).appendTo(linha)
    $(linha).appendTo('ol')
    $(linha).fadeIn(6000)
    
    $('#local-nome').text(nome)




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
    $('#descricao').val('')
    $('#data').val('')
    $('#nome').val('')
    })

    