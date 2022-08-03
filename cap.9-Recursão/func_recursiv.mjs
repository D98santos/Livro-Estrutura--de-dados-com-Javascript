//FATORIAL ITERATIVO

function factorialItertive(number){
    if (number < 0) return undefined;
    let total = 1;
    for (let n = number;n > 1; n--) {
    total = total * n;        
    }
    return total;
}
console.log(factorialItertive(5))

// FATORIAL RECURSIVO

function factorial(n){
    if(n === 1 || n === 0) return 1;
    return n * factorial(n - 1);
}
console.log(factorial(5))
