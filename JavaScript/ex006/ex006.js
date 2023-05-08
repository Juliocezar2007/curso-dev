function calcular(){
    var numero = document.getElementById("numero").value
    var nr = document.getElementById("nr").value
    var subtrair = numero - nr
    var multiplicar = numero * nr
    var dividir = numero / nr
    var resto = numero % nr
    var exponenciacao = numero ** nr
    var soma = Number(numero) + Number(nr)
    console.log(soma)
    document.getElementById("resultado").innerHTML += 
    `<br> 
    <br>
    a soma de ${numero} com ${nr} é ${soma} <br>
    a subtraçao de ${numero} com ${nr} é ${subtrair} <br>
    a multiplicação de ${numero} com ${nr} é ${multiplicar} <br>
    a divisão de ${numero} com ${nr} é ${dividir} <br>
    o resto  de ${numero} com ${nr} é ${resto} <br>
    o resto  de ${numero} com ${nr} é ${resto} <br>
    o expoencial de ${numero} com ${nr} é ${exponenciacao} <br>
    <br>
    <br>`
}
