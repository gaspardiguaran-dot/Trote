
function calcular() {
    const qtdeArroz = Number(document.getElementById("qtdeArroz").value);
    const qtdeFeijao = Number(document.getElementById("qtdeFeijao").value);
    const qtdeOleo = Number(document.getElementById("qtdeOleo").value);
    const qtdeMacarrao = Number(document.getElementById("qtdeMacarrao").value);

    const pontos = qtdeArroz * 10 + qtdeFeijao * 8 + qtdeOleo * 2 + qtdeMacarrao * 4;
    const cor = document.getElementById("cor").value;

    document.getElementById("result").innerText = `Pontuação Total: ${pontos} pontos`;
}