function range(start, end){
    let array = []
    while (start<=end){
        array.push(start)
        start++
    }
    return array
}

function sumOfRange(array){
    let sum=0;
    for (let value of array){
        sum += value
    }
    return sum
}

console.log(range(1, 10))
let array = range(1, 10)
console.log(sumOfRange(array))