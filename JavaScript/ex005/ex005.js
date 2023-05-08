function calcular(){
    // entrada
    var numero = document.getElementById("numero").value
    //processamento
    var dobro = numero * 2
    var metade = numero / 2
    //saida
    document.getElementById("resultado").innerHTML +=
    `<br>o dobro de ${numero} é ${dobro} e a metade é ${metade}<br>`
}

function limpar(){
    document.getElementById("resultado").innerHTML = " "
} 



