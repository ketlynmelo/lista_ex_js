    function exercicio_1(){
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

//exercicio_1();

function exercicio_2(){

    console.log("Contagem regressiva para o lançamento!")
    for(let i = 10; i >=0; i-- ) {
    console.log(i);

}
{

    console.log("Lançamento realizado!")

}
}

// exercicio_2();

function exercicio_3(){
    
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

// exercicio_3();

function exercicio_4(){

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

// exercicio_4();


function exercicio_5(){

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

// exercicio_5();

function exercicio_6(){

    let letra = prompt("Digite uma letra: ");

    //verifica se é uma das vogais
    if(letra === "a" || letra === "A" || letra === "e" || letra === "E" || letra === "i" || letra === "I" || letra ==="o" || letra === "O" || letra ==="u" || letra === "U" ){
 
        console.log("A letra '" + letra + "' é uma vogal");
    } else{

        console.log("A letra '" + letra + "' é uma consoante");
    }


}

// exercicio_6();

function exercicio_7(){

    let continuar= true;

    function sabores_sorvete(){

       const sabores = {

        a: {nome: "Chocolate", preco: 1.50},
        b: {nome: "Morango", preco: 2.50},
        c: {nome: "Creme", preco: 2.50},
        d: {nome: "Manga", preco: 3.20},
        e: {nome: "Melancia", preco: 3.40},
        f: {nome: "Vanilla Ice", preco: 3.00},
        g: {nome: "Céu Azul", preco: 3.60},
        h: {nome: "Brownie", preco: 4.00},
        i: {nome: "Hawaiano", preco: 5.00}

       };

       while(continuar){
        

       let codigo_sabor = prompt("Olá, qual é o código do sabor que você deseja?").toLowerCase();

       if(sabores[codigo_sabor]){    
        alert("Sabor: " + sabores[codigo_sabor].nome + "\nPreço: R$ " + sabores[codigo_sabor].preco);
       } else{
        alert ("Digite um código válido!");
       }

      continuar = confirm("Deseja ver outro código?");
    
          }
       }
       sabores_sorvete();
    }

//exercicio_7();

function exercicio_8(){

    let a = Number(prompt("Digite o primeiro número inteiro :"));

    while(!Number.isInteger(a)){
        a = Number(prompt("Digite um número inteiro válido! :"));

    }

    let b = Number(prompt("Digite o segundo número inteiro :"));

    while(!Number.isInteger(b)){
        b = Number(prompt("Digite um número inteiro válido! :"));

    }

    console.log(" A diferença deles é ", a-b);
    console.log(" O dobro da primeira somado ao triplo da segunda é ", (2*a) + (3*b));
    console.log(" A multiplicação delas são ", a*b);

    let diferenca = a - b ;
    let dobro = 2 * a;
    let triplo = 3 * b;
    let soma = dobro + triplo;
    let multi = a*b;

    alert(" A diferença deles é " + diferenca);
    alert(" O dobro da primeira somado ao triplo da segunda é " + soma);
    alert(" A multiplicação delas são " + multi);




}

// exercicio_8();

function exercicio_9(){

    let numeros = [];
    let aux = 0 ;

    for(let i=0; i<=1; i++){

        let numero = Number (prompt( "Digite um número inteiro " ));
    
       while(!Number.isInteger(numero)){
        numero = Number (prompt( "Digite um número inteiro válido! " ));
    }

        numeros.push(numero);
    }

    console.log("Os números são " +  numeros.join (", "));

    for(let i=0; i< numeros.length - 1; i++){

                      if (numeros[i] < numeros[i+1]){

                       aux = numeros[i];
                       numeros[i] = numeros[i+1];
                       numeros[i+1] = aux;

                  }
             }


    console.log("Os números em ordem é " +  numeros.join (", "));
    alert("Os números em sequência é " + numeros.join (", "))
    

   


}

// exercicio_9();

function exercicio_10(){

    const funcionarios = {
        nome : prompt("Digite o nome do funcionário: "),
        salario_bruto : Number(prompt ("Digite o salario bruto do funcionario: ")),
        desconto : 0.08, 

    }

    funcionarios.salario_desconto = funcionarios.salario_bruto * funcionarios.desconto,
    funcionarios.salario_total =  funcionarios.salario_bruto - funcionarios.salario_desconto,

    alert("Nome: " + funcionarios.nome + "\nSalário bruto: R$" + funcionarios.salario_bruto + "\nValor desconto: R$" + funcionarios.salario_desconto + "\nSálario líquido R$" + funcionarios.salario_total);

}

//exercicio_10()

function exercicio_11(){

   const funcionarios = {
        nome : prompt("Digite o nome do funcionário: "),
        salario_bruto : Number(prompt ("Digite o salario bruto do funcionario: ")),

    }; 

    if(funcionarios.salario_bruto<=1000){
      funcionarios.desconto= 0.08;
       
    } else if(funcionarios.salario_bruto>1000 && funcionarios.salario_bruto<1500){
        funcionarios.desconto= 0.085;
        

    }else if (funcionarios.salario_bruto>1500){
        funcionarios.desconto= 0.09;
       
    }

        funcionarios.salario_desconto = funcionarios.salario_bruto * funcionarios.desconto;
        funcionarios.salario_total =  funcionarios.salario_bruto - funcionarios.salario_desconto;
    

    alert("Nome: " + funcionarios.nome + "\nSalário bruto: R$" + funcionarios.salario_bruto.toFixed(2) + "\nTaxa de desconto: " + (funcionarios.desconto*100) + "%"  + "\nValor desconto: R$" + funcionarios.salario_desconto.toFixed(2)  + "\nSálario líquido R$" + funcionarios.salario_total.toFixed(2));
  

}

//exercicio_11();