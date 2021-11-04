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

/* todo ==> can't believe this code stressed me this much.
todo        I love learning. Though tearful and straining
 */

function countBs(aWord, aCharacter, aFunction) {
    return (aFunction(aWord, aCharacter))
}

let countChar = (aWord, aChar)=> {
    let counter =0
    for (let aCharacter of aWord){
        if (aCharacter=== aChar){
            counter +=1
        }
    }
    return counter
}

console.log(countBs("Seyi Shemba", 'm', countChar))