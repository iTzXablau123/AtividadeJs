// 1)_ Escreva um programa que faça o computador “pensar” em um número inteiro entre 0 e 5 e peça para o usuário tentar descobrir qual foi o número escolhido pelo computador. O programa deverá escrever na tela se o usuário venceu ou perdeu

let numero = prompt('Dos números de 0 a 5. Em qual estou pensando?')

if (numero == 4){
    alert('Você acertou. Parabéns!!')
}else{
    alert('Você errou. Que pena :(')
}
