// function testingScope(escopo) {
//   if (escopo === true) {
//     var ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
//     ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
//     console.log(ifScope);
//   } else {
//     var elseScope = 'Não devo ser utilizada fora meu escopo (else)';
//     console.log(elseScope);
//   }
//   console.log(ifScope + ' o que estou fazendo aqui ? :O'); // Se necessário esta linha pode ser removida.
// }

// const scopeTest = (escopo) => (escopo === true) ? 'Não devo ser utilizada fora do meu escopo (if)' : 'Não devo ser utilizada fora meu escopo (else)';

// console.log(scopeTest(false));

// Exercicio 2

const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const orderList = oddsAndEvens.sort();



console.log(`Os números ${orderList} se encontram ordenados de forma crescente`); // será necessário alterar essa linha 😉

// Exercicio 3

const factorial = (n) => (n === 0) || (n === 1) ? 1 : (n * factorial(n - 1));

console.log(factorial(4));

// fonte: https://stackoverflow.com/questions/51292639/how-to-make-a-javascript-factorial-function