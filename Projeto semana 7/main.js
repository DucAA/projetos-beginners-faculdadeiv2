
const xhr = new XMLHttpRequest();
xhr.open("GET", "https://worldtimeapi.org/api/timezone")

xhr.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        const objeto = JSON.parse(this.responseText)
        for (var i = 1; i <= 12; i++) {
            var al = Math.floor(Math.random() * objeto.length)
            var objetoal = objeto[al]
            al_cap(i, objetoal)
        }

    }
}

xhr.send()

function al_cap(i, objetoal) {
    document.getElementById(String(i)).innerHTML = ''
    const req = new XMLHttpRequest();
    req.open("GET", "https://worldtimeapi.org/api/timezone/" + objetoal)
    req.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            const objeto2 = JSON.parse(this.responseText)
            var local = objeto2.timezone
            addsec(objeto2.datetime, i)
            var fz = objeto2.utc_offset
            document.getElementById(String(i)).innerHTML += 
            `<div id="new" style="width:300px; justify-content:center; text-align:center; margin:50px 10px"><div>${local}</div>
            <div id="coluna${i}"></div>
            <div>${fz}</div>
            </div>`
        }
        else if(this.readyState == 0 || this.status == 404) {
            al_cap(i, objetoal)
        }

    }
    req.send()
}

function addsec(objeto, i) {

    var ano = parseInt(objeto.substring(0, 4))
    var mes = objeto.substring(5, 7)
    var dia = objeto.substring(8, 10)

    var h = objeto.substring(11, 13)
    var m = objeto.substring(14, 16)
    var s = objeto.substring(17, 19)

    var Cdata = new Date(ano, (mes - 1), dia, h, m, s)
    setInterval(function () {
        var auxi = Cdata.getSeconds()
        Cdata.setSeconds(auxi + 1)
        document.getElementById('coluna' + i).innerHTML = 
        Cdata.getDate() + "/" + (Cdata.getMonth() + 1) + "/" + 
        Cdata.getFullYear() + "<br>" + Cdata.getHours() + ":" + 
        Cdata.getMinutes() + ":" + Cdata.getSeconds() + "s"
    }, 1000)

}                                                                                                                                           