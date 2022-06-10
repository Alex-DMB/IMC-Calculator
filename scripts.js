function calculate() {
    var heightUser = document.getElementById('height').value
    var weightUser = document.getElementById('weight').value

    var imc = weightUser / (heightUser * heightUser)

    var descrition
    if (imc < 18.5) {
        descrition = 'Abaixo do peso'
    } else if (imc <= 24.9) {
        descrition = 'Peso ideal'
    } else if (imc <= 29.9) {
        descrition = 'Sobrepeso'
    } else if (imc <= 34.9) {
        descrition = 'Obesidade grau I'
    } else if (imc <= 39.9) {
        descrition = 'Obesidade grau II'
    } else {
        descrition = 'Obesidade mórbida'
    }

    document.querySelector('.result').innerHTML = 'Seu IMC é: ' + imc.toFixed(1)

    document.querySelector('.descrition').innerHTML = descrition
}
