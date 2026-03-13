// console.log("Hello world");

// let nome = "Ketlyn";
// console.log(nome);

// const pi = 3.14;
// console.log(pi);


// let n1= 3;
// let n2= 2;

// console.log(n1+n2);

// function saudacao(){
//     console.log("Olá meu nome é " + nome)
// };

// function somar(n3,n4){
//      console.log(n3+n4)
// };

// saudacao();
// somar(9,6);

function exercicio1(){
    let soma = 0;
    let continuar = true;

    while(continuar){
        let numero = parseFloat(prompt("Digite um número (Ou zero para encerrar): "));

        //modelo antigo:soma = soma + numero;
        //modelo java:soma += numero;

        if(isNaN(numero)){
            alert("Por favor, digite um número válido!");

        }else{
            soma += numero;
        }

        continuar = confirm("Deseja adicionar mais um número?");

    }
    alert("A soma dos números é " + soma);

}

//exercicio1);

function exercicio2(){

    console.log("Contagem regressiva para o lançamento!")
    for(let i = 10; i >=0; i-- ) {
    console.log(i);

}
{

    console.log("Lançamento realizado!")

}
}

//exercicio2);

function exercicio3(){
    
    console.log("Irei te ajudar no balanço anual da sua empresa!")
    let bruto=0;

    for(let i = 1; i >=12; i++ ) {
    bruto = parseFloat(prompt("Qual é o ganho bruto que você teve no mês " + i));



}
    
}

//exercicio3);
