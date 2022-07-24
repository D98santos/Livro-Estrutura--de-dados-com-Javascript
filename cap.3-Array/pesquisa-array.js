let numbers = [];
for (let i = 1; i <= 15; i++) {
  numbers[i - 1] = i;
}
numbers.indexOf(10); // 9
numbers.indexOf(100); // -1 no exist

numbers.push(10);
numbers.lastIndexOf(10); //  15

// METODOS FIND E FINDINDEX RECEBEM UMA FUNCAO CALLBACK

function multipleOf13(element, index, array) {
  return element % 13 == 0;
}

let a = numbers.find(multipleOf13); //  (13) retorna o valor
let b = numbers.findIndex(multipleOf13); //  (12) retorna o indice

// METODO INCLUDES VERIFICA SE EXISTE O ARG

numbers.includes(15); // true
numbers.includes(100); // false
numbers.includes(4, 5); // false ** verifica se apos a posicao 5 existe elemt 4

// METODO JOIN E TOSTRING
numbers.toString(); //   "1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,10"
numbers.join("-"); //    "1-2-3-4-5-6-7-8-9-10-11-12-13-14-15-10"
console.log();
