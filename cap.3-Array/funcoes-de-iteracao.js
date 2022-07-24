/////////// FUNÇÕES DE ITERAÇÃO

function isEven(x) {
  console.log(x);
  return x % 2 == 0 ? true : false;
  // PODE SER ABREVIADO POR --- return(x % 2 == 0) ---
}

let numbers = [];
for (let i = 1; i <= 15; i++) {
  numbers[i - 1] = i;
}
//console.log(numbers)

//  METODO EVERY / ATE FALSE

numbers.every(isEven); // 1 - FALSE

//  METODO SOME ATE TRUE

numbers.some(isEven); // 1, 2 - TRUE

//  METODO FOREACH PERCORRE TODO

numbers.forEach((x) => console.log(x % 2 == 0));
//false, true, false, true, false, true, false, true, false, true, false, true, false, true, false

//  METODO MAP ITERA TODO E DEVOLVE UM ARRAY

const myMap = numbers.map(isEven);
//console.log(myMap);
/*[
  false, true,  false, true,  false, true, false, true,  false, true,  false, true, false, true,  false 
]*/

//  METODO FILTER ITERA TODO E DEVOLVE UM ARRAY COM OS QUE RESUTAM TRUE

const evenNumbers = numbers.filter(isEven);
//console.log(evenNumbers);
/*[
   2,  4,  6, 8,
  10, 12, 14
]*/

//  METODO REDUCE ITERA TODO E ARMAZENA NO ACUMULADOR O RESULT DA FUNCAO

numbers.reduce((previous, current) => previous + current);
///   --120

//  METODO FOR..OF ITERA TODO E REALIZA O {CODIGO} PARA CADA

 for (const n of numbers) {
/*console.log(n % 2 === 0 ? "even" : "odd");*/
}
/* odd, even, odd, even, odd, even, odd, even, odd, even, odd, even, odd, even, odd */

// OBJETO @@ITERATOR ACESSANDO A PROPRIEDADE Symbol.iterator DO ARRAY

let iterator = numbers[Symbol.iterator]();
//   console.log(iterator.next().value); //1
//   console.log(iterator.next().value); //2
//   console.log(iterator.next().value); //3
//   console.log(iterator.next().value); //4
//   console.log(iterator.next().value); //5
//  ...
//for (const n of iterator) {console.log(n);}
// 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15

// METODO ENTRIES  DEVOLVE @@ITERATOR CHAVE/VALOR

let aEntries = numbers.entries();
//   console.log(aEntries.next().value); //[ 0, 1 ] posicao 0, valor 1
//   console.log(aEntries.next().value); //[ 0, 1 ] posicao 1, valor 2
//   console.log(aEntries.next().value); //[ 0, 1 ] posicao 2, valor 3
//  ...
//for (const n of aEntries) { console.log(n);}
/*
[ 0, 1 ]
[ 1, 2 ]
[ 2, 3 ]
[ 3, 4 ]
[ 4, 5 ]
[ 5, 6 ]
[ 6, 7 ]
[ 7, 8 ]
[ 8, 9 ]
[ 9, 10 ]
[ 10, 11 ]
[ 11, 12 ]
[ 12, 13 ]
[ 13, 14 ]
[ 14, 15 ] */

// METODO KEYS DEVOLVE @@ITERATOR CHAVE NESSE CASO OS INDICES

let akeys = numbers.keys();
//   console.log(akeys.next()); //{ value: 0, done: false }
//   console.log(akeys.next()); //{ value: 1, done: false }
//   console.log(akeys.next()); //{ value: 2, done: false }
//  ...
for (const n of akeys) {
  ////   console.log(akeys.next());
}
/*{ value: 0, done: false }
{ value: 1, done: false }
{ value: 2, done: false }
{ value: 4, done: false }
{ value: 6, done: false }
{ value: 8, done: false }
{ value: 10, done: false }
{ value: 12, done: false }
{ value: 14, done: false }*/

// METODO VALUES DEVOLVE @@ITERATOR VALUE NESSE CASO O VALOR DO INDICE

let aValues = numbers.values();
//   console.log(aValues.next()); //{ value: 0, done: false }
//   console.log(aValues.next()); //{ value: 1, done: false }
//   console.log(aValues.next()); //{ value: 2, done: false }

//  for (const n of aValues) {
//       console.log(aValues.next());
//  }
/*
{ value: 1, done: false }
{ value: 2, done: false }
{ value: 3, done: false }
{ value: 5, done: false }
{ value: 7, done: false }
{ value: 9, done: false }
{ value: 11, done: false }
{ value: 13, done: false }
{ value: 15, done: false } */

// METODO FROM CRIA UM ARRAY A PARTIR DE UM EXISTENTE

let numbers2 = Array.from(numbers); // faz uma copia de numbers

let evens = Array.from(numbers, (x) => x % 2 == 0);
/*[
  false, true,  false,
  true,  false, true,
  false, true,  false,
  true,  false, true,
  false, true,  false
]*/

// METODO ARRAY.OF CRIA UM ARRAY A PARTIR DOS ARGUMENTOS PASSADOS

let numbers3 = Array.of(1); //  [ 1 ]
let numbers4 = Array.of(1, 2, 3, 4, 5); //  [ 1, 2, 3, 4, 5 ]

let numbersCopy = Array.of(...numbers4); //  [ 1, 2, 3, 4, 5 ]

// METODO ARRAY.FILL PREENCHE UM ARRAY COM UM VALOR

numbersCopy.fill(0); //  [ 0, 0, 0, 0, 0 ]

numbersCopy.fill(2, 3); // passando indice para iniciar [ 0, 0, 0, 2, 2 ]
numbersCopy.fill(8, 2, 4); // passando indice para iniciar e parar [ 0, 0, 8, 8, 2 ]

let ones = Array(5).fill(1); /// cria um array de 5 valores com o argmt passado (1)
// ////////////////////////////////  [ 1, 1, 1, 1, 1 ]

// METODO .COPYWITHIN COPIA UMA SEQUENCIA PARA UMA POSICAO INDICADA

let copyArray = [1, 2, 3, 4, 5, 6];

copyArray.copyWithin(0, 3); // colocou no indice (0) a seqncia a partir do indice (3) = [ 4, 5, 6, 4, 5, 6 ]

copyArray = [1, 2, 3, 4, 5, 6];
copyArray.copyWithin(1, 3, 5); // colocou no indice (1) a seqncia a partir do indice (3 ate x<5) = [ 1, 4, 5, 4, 5, 6 ]

//------------------------------------------------------------------------------------------------------------------------------
