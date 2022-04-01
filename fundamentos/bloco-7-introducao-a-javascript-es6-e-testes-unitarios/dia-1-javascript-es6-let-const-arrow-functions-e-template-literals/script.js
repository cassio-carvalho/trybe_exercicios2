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

const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const orderList = oddsAndEvens.sort();



console.log(`Os números ${orderList} se encontram ordenados de forma crescente`); // será necessário alterar essa linha 😉