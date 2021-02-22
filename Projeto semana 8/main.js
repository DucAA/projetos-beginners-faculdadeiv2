function loadLivros() {

    var busca = document.getElementById("Input").value
    var tipo = document.getElementById("selec").value
    var conteudo = document.getElementById('conteudo')


    fetch(`https://www.googleapis.com/books/v1/volumes?q=+${tipo}:${busca}&key=AIzaSyD8xHkdmamsCdfw0hFso39UHaDKfYlNlKw`).then(res => res.json()).then(json => {
        console.log(json);


        for (let i = 0; i <= json.items.length; i++) {
            conteudo.innerHTML +=
            `<div id="div-js" style="display: flex;   width:100%; justify-content:center; align-items:center text-align: center;">
            <div style="width:50%; justify-content:center; align-items:center; text-align: center;">
            <img id="thumbnail" src="${json.items[i].volumeInfo.imageLinks.thumbnail}" style="width:200px; text-align: center; margin-top: 10px;">
            <p id="title" class="hi" style="text-align: center; margin-top: 10px;">
                Titulo: ${json.items[i].volumeInfo.title}
            </p>
            <p id="subt" class="hi" style="text-align: center; margin-top: 10px;">
                Subtitulo: ${json.items[i].volumeInfo.subtitle}
            </p>
            <p style="text-align: center; margin-top: 10px;">
                Categoria: ${json.items[i].volumeInfo.categories}
            </p>
            <p id="autor" class="hi" style="text-align: center; margin-top: 10px;">
                Autor: ${json.items[i].volumeInfo.authors}
            </p style="text-align: center;">
            <p id="date" class="hi" style="text-align: center; margin-top: 10px;">
                Data de Publicação: ${json.items[i].volumeInfo.publishedDate}
            </p style="text-align: center;">
            <p id="desc" style="text-align:center; margin-top: 10px;">
                Descrição: ${json.items[i].volumeInfo.description}
            </p>
            <div id="morejson" style="display: flex; flex-direction: row; justify-content: center;" >
            <a id="apilivro" target="_blank" class="link" href="${json.items[i].selfLink}" style="margin: 10px;">
                API do Livro
            </a>
            <a href="${json.items[i].volumeInfo.jsonLink}" class="link" target="_blank" style="margin: 10px;">
                Mais informações
            </a>
            <a href="${json.items[i].saleInfo.buyLink}" class="link" target="_blank" style="margin: 10px;">
                Link de Compra
            </a>
            </div>
            </div>`
        }
    })

}