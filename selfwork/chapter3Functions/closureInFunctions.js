function multiplier(factor){
    return number => number * factor;
}

twice = multiplier(2)
console.log(twice(5))

let findTheMinimumValue = (firstValue, secondValue) => {
    if (firstValue < secondValue){
        console.log(firstValue +" is the minimum value")
    }
    else console.log(secondValue + " is the minimum value")
}

findTheMinimumValue(4, 7)
//
// let isEven = (aNumber)=>{
//     let reduceTo1 = (value)=>value-2;
//     if (aNumber===0) return true;
//     else if (aNumber===1) return false
//     else if (aNumber -2 > 1) reduceTo1(aNumber)
//     return isEven(aNumber)
// }
//
// console.log(isEven(15))