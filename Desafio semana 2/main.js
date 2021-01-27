/* Não mexer nessa parte */
(function () {
    document.getElementById('quantity').addEventListener('input', function (e) {
        e.target.value = e.target.value.replace(/\D/g, "")
    });

    document.getElementById('calcular').addEventListener('click', function (e) {
        calcular(parseInt(document.getElementById('quantity').value))
    });
})()

function calcular() {
    var gr = 22 * 2.57
    let valorDigitado = document.getElementById('quantity').value
    var resultado = valorDigitado * gr
    console.log(valorDigitado)
    
    if (valorDigitado == 0 | valorDigitado== ''  ) {
        alert('Digite um numero valido');
        document.getElementById('quantity').value="";
      } else {
        alert(`total: R$${resultado.toFixed(2)}`)
        document.getElementById('quantity').value="";
      }

}



