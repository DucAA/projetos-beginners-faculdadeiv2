function Numeros() {
              
    var ponto = document.getElementById("ponto")
       if(ponto.value.length == 3){
        ponto.value += "."
       }
 }

 var produtos = JSON.parse(localStorage.getItem("produtos"));

 if(produtos == null){
       produtos = [];
 }

 function salvar(){
         produtos.push({
         'ponto': document.getElementById('ponto').value,
         'name' : document.getElementById('name').value,
         'equip' : document.getElementById('equip').value,
         'carac' : document.getElementById('carac').value
     });

     const json_produtos = JSON.stringify(produtos);

     localStorage.setItem("produtos", json_produtos);
     }