// let daysOfWeek = new Array()
// daysOfWeek = new Array(7)
// daysOfWeek = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday')

let daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

//console.log(daysOfWeek.length);

// -- PERCORRENDO  ARRAYS--

for (let i = 0; i < daysOfWeek.length; i++) {
  //console.log(daysOfWeek[i]);
}

const fibonacci = [];
fibonacci[1] = 1;
fibonacci[2] = 1;
//console.log(fibonacci);

for (let i = 3; i < 20; i++) {
  ////////////////////////////////////////////////////////////////
  fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2]; ////////////----- CRIA UM ARRAY COM  20 SEQUENCIAS FIBO
} ////////////////////////////////////////////////////////////////
for (let i = 1; i < fibonacci.length; i++) {
  // console.log(fibonacci[i]);
}

///////   ARRAYs BIDIMENSIONAIS E MULTIDIMENSIONAIS
let averageTemp = [];
averageTemp[0] = [72, 75, 79, 79, 81, 81];
averageTemp[1] = [81, 79, 75, 75, 73, 73];

console.table(averageTemp);

function printMatrix(myMatrix) {
  for (let i = 0; i < myMatrix.length; i++) {
    for (let j = 0; j < myMatrix[i].length; j++) {
      console.log(myMatrix[i][j]);
    }
  }
}
//printMatrix(averageTemp);

//////////////// ARRAYs MULTIDIMENSIONAIS

const matrix3x3x3 = [];
for (let i = 0; i < 3; i++) {
  matrix3x3x3[i] = [];
  for (let j = 0; j < 3; j++) {
    matrix3x3x3[i][j] = [];
    for (let z = 0; z < 3; z++) {
      matrix3x3x3[i][j][z] = i + j + z;
    }
  }
}

for (let i = 0; i < matrix3x3x3.length; i++) {
  for (let j = 0; j < matrix3x3x3[i].length; j++) {
    for (let z = 0; z < matrix3x3x3[i][j].length; z++) {
      //console.log(matrix3x3x3[i][j][z])
    }
  }
}
console.table(matrix3x3x3);

//--------------------------------------------------------------------------------

////////////  ARRAY.CONCAT

const zero = 0;
const positiveNumbers = [1, 2, 3];
const negativeNumbers = [-3, -2, -1];

let numbers = negativeNumbers.concat(zero, positiveNumbers);
console.log(numbers);

//----------------------------------------------------------------------------------

