for(let counter = 1; counter < 8; counter++){
    let asterisks = "#".repeat(counter)
    console.log(asterisks)
}

for (let counter = 1; counter<=100; counter++){
    if (counter%3 ==0 && counter%5 ==0){
        console.log("FizzBuzz")
    }
    if (counter %3 ==0){
        console.log("Fizz")
    }else if (counter%5 ==0){
        console.log("Buzz")
    }else console.log(counter)
}

//
// let firstString = " # # # #"
// let secondString= "# # # # "
// let value = prompt("Enter the length of the chessboard")
// for (let counter = 0; counter<value ; counter++){
//     if (counter%2 ===0)console.log(firstString)
//     else if (counter%2 ===1)console.log(secondString)
// }