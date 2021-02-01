let xhr = new XMLHttpRequest()

let bloco = document.querySelector("main")

var repositorioJson = localStorage.getItem("repositorio")

if(repositorioJson == null){
    repositorioJson = []
}

var repositorio = JSON.parse(repositorioJson)

let url = "https://api.github.com/repos/DucAA/" + repositorio[0].nome;

xhr.open('GET', url)


xhr.onreadystatechange = function () {

    if (this.readyState == 4 && this.status == 200) {
        let dadosJSONText = xhr.responseText
        let dadosJSONObj = JSON.parse(dadosJSONText)
            
        bloco.innerHTML += 
        
            `<h1 class="">Username:`+dadosJSONObj.owner.login+`</h1>
            <p>Id do Repositório: `+dadosJSONObj.id+`</p>
            <p><img src="img/minhaFoto.jpg"></img></p>
            <a class="links-github-seguidores" href="`+dadosJSONObj.following_url+`">Link para seguidores</a>
            <p>Descrição do Repositório: `+dadosJSONObj.description+`</p>
            <div>
            <a class="links-github01" href="`+dadosJSONObj.collaborators_url+`">Link para Colaboradores</a>
            <a class="links-github02" href="`+dadosJSONObj.branches_url+`">Link para Branchs</a>
            <a class="links-github03" href="`+dadosJSONObj.commits_url+`">Link para Commits</a>
            </div>
            <p class="">Linguagem Predominante: `+dadosJSONObj.language+`</p>
            <img id="img-linguagem" src="img/`+dadosJSONObj.language +`.jpg"></img>`
    }
}
xhr.send();