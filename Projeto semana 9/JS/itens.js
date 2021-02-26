var item
var j

function Itens() {
    document.getElementById('itens').value

    fetch(`https://ddragon.leagueoflegends.com/cdn/11.4.1/data/pt_BR/item.json`)
        .then(res => res.json())
        .then(json => {

            var j = []

            for (num in json.data) {
                j.push(json.data[num])

                json1 = json.data[num] + ".json"

                itemimg = json.data[num].image.full


                document.getElementById("itens").innerHTML +=
                    `<div class="foto" style="width:50px; padding: 2px; margin: 2px; height: 50px;"><img class="foto" id="${num}" style="width:50px" src="http://ddragon.leagueoflegends.com/cdn/10.18.1/img/item/${num}.png"></div>`

            }

            var maxJ = j.length
        })
}

Itens()

function buscarItens(item) {
    document.getElementById('build').value
    fetch(`https://ddragon.leagueoflegends.com/cdn/11.4.1/data/pt_BR/item.json`)
        .then(res => res.json())
        .then(json5 => {
            document.getElementById("build").innerHTML = '<div>' + json5.data[item].name +
                '<br>' + json5.data[item].plaintext + "<br>" +
                 json5.data[item].gold.total + " - " +
                 json5.data[item].gold.sell + "<br>" +
                json5.data[item].description + '</div>'

            var finalItem = []

            if (finalItem != undefined) {
                for (i = 0; i < finalItem.length; i++) {
                    finalItem.pop()
                }
            }

            for (num in json5.data[item].into) {
                finalItem.push(json5.data[item].into[num])
            }

            for (i = 0; i < finalItem.length; i++) {
                document.getElementById("build").innerHTML +=
                    `<div><img class="foto" id="${finalItem[i]}" style="width:50px; height:50px" src="http://ddragon.leagueoflegends.com/cdn/10.18.1/img/item/${finalItem[i]}.png"></div>`
            }


        })
}