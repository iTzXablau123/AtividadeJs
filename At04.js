// 4)_ Escreva um programa que pergunte o salário do funcionário e calcule o valor do aumento. Para salários superiores a R$ 1250,00 calcule um aumento de 10%. Para os inferiores ou iguais, de 15%

let salario = parseInt(prompt('Qual é o seu salario'));

if (salario > 1250){
    let aumento = (salario * 10/100)+salario;
    alert(aumento)
}else{
    let aumento2 = (salario * 15/100)+salario;
    alert(aumento2)
}