 /*
            comentario em 
            multiplas linhas
        */       
       //comentario em uma única linha
       
       //O alert é utilizado para exibir uma mensagem em pppp
       alert("olá mundo ! ! !") 
    

       //No console conseguimos visualizar informações
       //sem exibir na pagina
       console.log("Olá mundo ! ! ! utilizando console")
   
       //criando uma função chamada quando clicamos no botão
       function Botaoteste(){
           alert("voçe clicou no botao")
       }
   
       function Botaoteste() {
           alert("voçe clicou no botao")
       }
       //Declarando variaveis
       //Strlng - conjunto de caracteres - Declarar com "" ou ""
       var nome =  "julio"
       var sobrenome = "moreira"
       //number - todo numero em 25 é do tipo number - Declarar sem ""
       var idade = 35
       //boolean - somente recebe true ou falso
       var aprovado = true
   
       console.log (typeof nome) //comando typeof para saber o tipo do dado
   
       console.log (nome + '' + sobrenome) //concatenando strings com o +*/
       //se utilizamos o + com string ele concatena se utilizar com numbler soma
       var n1 =10
       var n2 =25
       console.log (n1 + n2) //ira somar as 2 variaveis number (35)
       var n3 = "10"
       var n4 = "25"
       console.log (n3 + n4) //ira concatnear "juntar as 2 variaveis ("1025")"
   
       n1 = n2 //uma variavei pode receber o valor de outra variavel
       console.log ("n1 = " + n1 + 'e o n2 =' + n2)
       var salario =1290.85 // para atribuir o valor decimal utilizar. não.
       salario = salario + 200 //posso tambem somar a variavel com ela mesmo
       console.log (salario)
       salario += 200 //representação mais simplificada da expressão acima
       console.log (salario)
   
       //antigamente para juntar texto e variaveis faziamos assim
       console.log ('ola, ' + nome + 'voçe tem' + idade + 'anos e recebe R$' + salario)
       //hoje utilizamos o templateSting forma mais simples
       console.log (`ola, ${nome} voce tem ${idade} anos e recebe R$ ${salario}`)
   
       //Função do botao para obter o nome
       function BotaoNome() {
           //no prompt abre opção para digitar algo
           var nome2 =prompt('Qual é o seu nome?')
           //o confirm abre texto com opção ok e cancel
           confirm(`ola,${nome2} enteude js?`)    
       }
   
       function Botaosomar(){
           //receber valor1 de um prompt
           var valor1 = prompt("informe o valor 1:")
           //receber valor2 de um prompt
           var valor2 = prompt("informe o valor 2:")
           //variave1 soma receber valor1 + valor2
           var somar = Number(valor1) + Number(valor2)
           //Exibir em um alert o valor de soma
           //alert(`A soma entre ${valor1} e ${valor2} é: ${somar}`)
   
           //alterando um elemento buscando ele pelo id e alterando
           //o conteudo do HTML, podemos ler da seguinte forma
           //no documento pegar o elemento pelo id resultadosoma e
           //alterando o conteudo do HTML pela string
            document.getElementById("resultadodaSoma").innerHTML += 
           `<br> A soma dos numeros ${valor1} e ${valor2} é = ${somar}`
       }
           function botaocidade(){
               //variavel nomecidade recebendo o conteudo digitado no Input
               var nomecidade = document.getElementById("cidade").value
               document.getElementById("resultadocidade").innerHTML = nomecidade
          }

          //operadores aritimeticas e ordem de precendência 
          var opeSoma = 5 + 2 //operador de soma +
          console.log(opSoma)
          var opSubtracao = 5 - 2 //operador de subtração -
          console.log(opSubtracao)//3
          var opMultiplicacao = 5 * 2 //operador de multiplicacao
          console.log(opMultiplicacao) //10
          var opDivisao = 5/2 // oérador de divisao
          console.log(opDivisao) //2.5

          var opexponenciano = 5 ** 2 //operador de exponenciano
          console.log(opexponenciano) //25
          var opresto = 5 % 2 //operador de resto da divisao
          console.log(opresto)//1

          //ordem de precendencia
          var ordemPrecendencia = 5 + 3 / 2
          console.log(ordemPrecedencia1) //6.5
          var ordemPrecedencia2 = (5 + 3) /2
          console.log(ordemPrecedencia2) //4
          /* 1° ()
            2° **
            3° * /
            4° % 
            5° + -
            */
           
            //constantes - o valor nao pode ser alterado depois de atribuido
            const p1 = 3.13
            // pi = 3 - se o valor for alterado dara erro no javascript



   