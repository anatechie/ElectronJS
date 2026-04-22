//10.  Crie uma função chamada calcularTroco que receba valor pago e valor do produto e retorne o troco.

function calcularTroco(valorPago, valorProduto){
    let troco = valorProduto - valorPago;
    return troco;
}

console.log(calcularTroco(50, 100));