function power(base, exponent){
    if (exponent === 0){
        return 1
    }
    else {
        return base * power(base, keepOnReducingTheExponent(exponent))    }
}

let keepOnReducingTheExponent= (exponent)=> exponent-1;

console.log(power(2, 5))

function getEvennessOfNumber(aValue){
    if (aValue ===1){
        return "odd"
    }
    else if (aValue===0){
        return "even"
    }
    else if (aValue < 0){
        return getEvennessOfNumber(aValue+2)
    }
    else return getEvennessOfNumber(aValue-2)
}

console.log(getEvennessOfNumber(75))