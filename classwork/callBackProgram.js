for (let i = 1; i<=12; i++){
    compute(i, multiple)
}

for (let i=1; i <= 12; i++){
    compute(i, addi)
}

for (let i = 1; i<=12; i++){
    bodmasFunction(i, multiply)
}

for (let i=1; i <= 12; i++){
    bodmasFunction(i, addition)
}

function multiply(x, y){
    let result = x * y
    console.log(`${x} * ${y} = ${result}`)
}

function addition(x, y){
    let result = x + y
    console.log(`${x} + ${y} = ${result}`)
}

function bodmasFunction(firstNumber, bodmasParameter){
    for (let secondNumber = 1;secondNumber<= 12; secondNumber++){
        bodmasParameter(firstNumber,secondNumber)
    }
}

function addi(firstNumber, secondNumber){
    let result = firstNumber + secondNumber
    return `${firstNumber} + ${secondNumber} = ${result}`
}

function multiple(firstNumber, secondNumber) {
    let result = firstNumber * secondNumber
    return `${firstNumber} * ${secondNumber} = ${result}`
}

function compute(aNumber, anotherFunction){
    for (let anotherNumber = 1; anotherNumber <12; anotherNumber++){
        console.log(anotherFunction(aNumber, anotherNumber))
    }
}