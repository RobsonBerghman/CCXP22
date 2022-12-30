const dia  = document.getElementById('dia')
const hora  = document.getElementById('hora')
const minuto  = document.getElementById('minuto')
const segundo  = document.getElementById('segundo')

const lancamento = "25 jan 2023"

function countDown() {
    const dataLanc = new Date(lancamento)
    const hoje = new Date()

    const segtotal = (dataLanc - hoje)/1000;

    const finalDias = Math.floor(segtotal / 60 / 60 / 24);
    const finalHoras = Math.floor(segtotal / 60 / 60) %24;
    const finalMinutos = Math.floor(segtotal / 60)%60;
    const finalSegundos = Math.floor(segtotal)% 60;

    dia.innerHTML = finalDias + ("D")
    hora.innerHTML = formatoTempo (finalHoras) + ("H")
    minuto.innerHTML = formatoTempo (finalMinutos) + ("M")
    segundo.innerHTML = formatoTempo (finalSegundos) + ("S")
}

function formatoTempo( tempo ){
    return tempo < 10? `0${tempo}` : tempo;
}
countDown();
setInterval(countDown, 1000)