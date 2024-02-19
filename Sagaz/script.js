let hi = document.getElementById('horaInicial');
let mi = document.getElementById('minInicial');
let hf = document.getElementById('horaFinal');
let mf = document.getElementById('minFinal');
let resultado = document.getElementById('r');

function soma() {
    let somaHora = Number(hi.value) + Number(hf.value);
    let somaMinuto = Number(mi.value) + Number(mf.value);
    while (somaMinuto > 59) {
        somaMinuto -= 60;
        somaHora++;

    resultado.innerHTML = somaHora + ":" + somaMinuto;
}}

function sub() {
    let momentoInicial = Number(hi.value) * 60 + Number(mi.value);
    let momentoFinal = Number(hf.value) * 60 + Number(mf.value);
    let resultadoEmMinutos = momentoInicial - momentoFinal;
    if (resultadoEmMinutos < 0) {
        resultadoEmMinutos *= -1;
    }
    let resultadoEmHoras = 0;
    while (resultadoEmMinutos > 59) {
        resultadoEmHoras++;
        resultadoEmMinutos -= 60;
    }
    resultado.innerHTML = resultadoEmHoras + ":" + resultadoEmMinutos;
}