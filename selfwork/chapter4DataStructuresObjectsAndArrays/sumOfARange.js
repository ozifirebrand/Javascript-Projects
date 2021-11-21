function range(start, end, step) {
    let array = []
    if (start < end) {
        while (start <= end) {
            array.push(start)
            if (step === undefined || step === null) {
                start++
            } else {
                start += step
            }
        }
    } else if (start > end) {
        while (start >= end) {
            array.push(start)
            if (step === undefined || step === null) {
                start--
            } else {
                start += step
            }
        }
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
console.log(range(10, 1, -2))
let array = range(1, 10)
console.log(sumOfRange(array))