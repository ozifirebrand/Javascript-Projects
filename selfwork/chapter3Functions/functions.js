
function factorial(number){
    if (number === 0 ){
        return 1
    } else {
        return factorial(number-1) * number;
    }
}

console.log(factorial(4))