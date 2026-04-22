//9.  Crie uma função chamada calcularDesconto que receba valor e percentual de desconto e retorne o valor final

function calcularDesconto(valor, percDesc){
    let desconto = valor * (percDesc / 100);
    return valor - desconto;
}

console.log(calcularDesconto(100, 5));