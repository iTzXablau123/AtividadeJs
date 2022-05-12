// 2)_ Escreva um programa que pergunte a velocidade do carro de um usuário. Caso ultrapasse 80km/h, exiba uma mensagem dizendo que o usuário foi multado. Nesse caso, exiba o valor da multa, cobrando R$ 5,00 por Km acima de 80km/h.

let velocidade = prompt('Qual a velocidade do seu carro?')
if (velocidade > 80){
    let multa = (velocidade - 80)*5;
    alert(`Você esta acima do limite. A multa é de ${multa}`);
}else{
    alert('Você esta dentro do limite');
}