let max = 10;
// alert(123);

for (var i = 1; i <= max; i++) {
    let a = checkIfNumberIsPrime(i);
    if (a == true) {
        console.log(i);
    }

    let b = checkIfNumberIsNotPrime(i);
    if (b == false) {
        console.log(i);
    }
}

let newNumber = 11002;
let cc = checkIfNumberIsPrime(newNumber);

function checkIfNumberIsPrime(number) {
    let flagIfPrime = true;
    for (let j = 2; j < number; j++) {
        if (number % j == 0) {
            flagIfPrime = false;
        }
    }
    return flagIfPrime;
}

function checkIfNumberIsNotPrime(number) {
    for (let j = 2; j < number; j++) {
        if (number % j == 0) {
            return true;
        }
    }
    return false;
}
