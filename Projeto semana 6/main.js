let xhr = new XMLHttpRequest()

let bloco = document.querySelector("main")

let url = "https://api.github.com/users/DucAA/repos";

xhr.open('GET', url)


xhr.onreadystatechange = function () {

    if (this.readyState == 4 && this.status == 200) {
     let dadosJSONText = xhr.responseText
     let dadosJSONObj = JSON.parse(dadosJSONText)
    for (let i = 0; i < dadosJSONObj.length; i++) {
     bloco.innerHTML +=
                  
    `<div class="div-principal">
    <h2 title-repo">${dadosJSONObj[i].name}</h2>
        <div class="div-secundaria">
            <img style="width:435px; height:200px" src="img/github.jpg">
            <button class="btn" onclick="openurl('${dadosJSONObj[i].clone_url}')">link</button>
            <button class="btn" onclick="clone('git clone ${dadosJSONObj[i].html_url}')">Clone</button>
            <button class="btn" id="${dadosJSONObj[i].name}" onclick="abrirsobre(this)">Mais Informações</button>
        </div>
    </div>`
                  
        }
    }
}

xhr.send();

function openurl(url) {
window.open(url)
}

function clone(url) {
    const input = document.createElement("input");
    input.value = url;
    input.id = "input";
    document.body.appendChild(input);
    input.select();
    document.execCommand("copy");
    input.remove();
}   
        
function clone(url) {
    const input = document.createElement("input");
    input.value = url;
    input.id = "input";
    document.body.appendChild(input);
    input.select();
    document.execCommand("copy");
    input.remove();

}    

function abrirsobre(sobre){
    let arr = []

    arr.push({nome: sobre.id})
    let arrJson = JSON.stringify(arr)

    localStorage.repositorio = arrJson

    window.location.href = "sobre.html"
} 
