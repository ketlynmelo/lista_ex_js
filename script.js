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

//exercicio1();

function exercicio2(){

    console.log("Contagem regressiva para o lançamento!")
    for(let i = 10; i >=0; i-- ) {
    console.log(i);

}
{

    console.log("Lançamento realizado!")

}
}

// exercicio2();

function exercicio3(){
    
    function calculo_mensal(){
    
    let ganho_total = 0;
    let perda_total = 0;
    let mes = 1;
    let saldo_total = 0;

    while(mes<=12){
        let bruto = parseFloat(prompt("Digite qual foi o ganho bruto do mês " + mes ));

        if(isNaN(bruto)){
            alert("Por favor, digite um número válido!");

        }else{
            ganho_total+=bruto;
        }
        
        let gasto = parseFloat(prompt("Digite qual foi o gasto do mês " + mes ));

        if(isNaN(gasto)){
            alert("Por favor, digite um número válido!");

        }else{
           perda_total+=gasto;
        }
        
        mes++;
    } 
        alert("Seu bruto anual foi de : " + ganho_total);
        alert("Seu gasto anual foi de: " + perda_total); 

        saldo_total= ganho_total-perda_total;

        alert("Seu saldo financeiro foi de: " + saldo_total);
         
        if(saldo_total>0){
            alert("Você lucrou esse ano!")

        } else{
            alert("Você teve prejuízo esse ano!")
        }
    }
 
      calculo_mensal();

}

// exercicio3();

function exercicio4(){

    let numeros = [];
    let aux = 0 ;
    let trocar = true;

    for(let i = 1; i<=4; i++){

        let numero = Number (prompt("Digite o número inteiro " + i));

        while(!Number.isInteger(numero)){
            numero = Number(prompt("Digite um número inteiro válido!"))
        }

        numeros.push(numero);

    }

    //ordenando os numeros do vetor

        while(trocar){

            trocar= false;

                   for(let i=0; i< numeros.length - 1; i++){

                      if (numeros[i] < numeros[i+1]){

                       aux = numeros[i];
                       numeros[i] = numeros[i+1];
                       numeros[i+1] = aux;
                       trocar = true;

                  }
             }

        }

     alert("Números digitados: " + numeros.join(", "));

    }

// exercicio4();


function exercicio5(){

    let numero = Number(prompt("Me diga um número inteiro "));

    while(!Number.isInteger(numero)){
         numero = Number(prompt("Digite um número inteiro válido!"));
    }

//verificando se é par ou impar
    if(numero %2 ===0 ){
    //par
        numero=numero+1;
        console.log(numero + " agora é ímpar");

    } else {
        //impar
        numero=numero-1;
        console.log(numero + " agora é par");

    }

    

}

exercicio5();



