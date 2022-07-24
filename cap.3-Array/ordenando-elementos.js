let numbers = [];
for (let i = 1; i <= 15; i++) {
  numbers[i - 1] = i;
}
/*[
   1,  2,  3,  4,  5,  6,
   7,  8,  9, 10, 11, 12,
  13, 14, 15
]
*/
numbers.reverse(); 
/*[
  15, 14, 13, 12, 11, 10,
   9,  8,  7,  6,  5,  4,
   3,  2,  1
]*/

numbers.sort();
/*[
   1, 10, 11, 12, 13, 14,
  15,  2,  3,  4,  5,  6,
   7,  8,  9
]*/

numbers.sort((a,b) => a-b); 
/*
[
   1,  2,  3,  4,  5,  6,
   7,  8,  9, 10, 11, 12,
  13, 14, 15
]

sort pode recber uma funcao com dois param e como no exemplo o que recebe -1 vai 
para o inicio do array gerando ordem

seria o mesmo que 
function copare(a, b){
    if(a < b){return -1} 
    if(a > b){ return 1}
    rerturn 0
}
*/

// ORDENACAO PERSONALIZADA
const friends = [
    {name: 'John', age : 30},
    {name: 'Ana', age: 20},
    {name: 'Chris', age : 25}
]

function comparePerson(a, b){
    if(a.age < b.age){
        return -1
    }
    if(a.age > b.age){
        return 1
    }
    return 0
}
friends.sort(comparePerson)
/*[
  { name: 'Ana', age: 20 },
  { name: 'Chris', age: 25 },
  { name: 'John', age: 30 }
]
*/

// ORDENADO STRINGS

let names = ['Ana', 'ana', 'John', 'john'];

names.sort(); // [ 'Ana', 'John', 'ana', 'john' ] valores ASCII A:65, J:74, a:97, j:106.

names = ['Ana', 'ana', 'John', 'john'];

names.sort((a,b)=>a.localeCompare(b)); // [ 'ana', 'Ana', 'john', 'John' ]

//------------------------------------------------------------------------------------------------------
