function calcularIMC() {
    var estatura = document.getElementById('estatura').value;
    var peso = document.getElementById('peso').value;
    estatura = estatura / 100; // Convertir de cm a metros
    var imc = peso / (estatura * estatura);
    var categoria = '';

    if (imc < 18.5) {
        categoria = 'Bajo peso';
    } else if (imc >= 18.5 && imc <= 24.9) {
        categoria = 'Normal';
    } else if (imc >= 25 && imc <= 29.9) {
        categoria = 'Sobrepeso';
    } else {
        categoria = 'Obesidad';
    }

    document.getElementById('resultado').innerHTML = 'Tu IMC es: ' + imc.toFixed(2) + ' y tu categoría es: ' + categoria;
}