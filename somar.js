function somarNumeros(){
    let soma = 0;
    let continuar = true;

    while(continuar){
        let numero = parseFloat(prompt("Digite um número: "));

        if(isNaN(numero)){
            alert("Por favor, digite um número válido!");

        }else{
            soma += numero;
            console.log(soma);
        }

        continuar = confirm("Deseja adicionar mais um número?");

    }
    alert("A soma dos números é " + soma);

}

somarNumeros();