 let str = "Hi";
let greeting = "Hello"

 let name = "John"
 let message = `${str} ${name} \n${greeting} ${name}`

 console.log(message)

 let status = false;
 let strr = status.toString();
 console.log(strr);
 let back = Boolean(strr)
 console.log(back)

 let value = greeting.lastIndexOf("o")
 let substr = greeting.slice(1, value)
 console.log(substr)

 let newArray = [5, 3, 32, 6, 9]
 let lastNumber = newArray.pop()
 console.log(lastNumber)
 let firstNumber = newArray.shift();
 console.log(firstNumber)

 newArray.push(8, 3, 22)
 console.log(newArray)

 function reverse(word){
     let reversedString ='';
     let arr = [];
     for (let i = 0; i < word.length ; i++) {
         arr.push(word[i])
     }
     while (arr.length>0){
         reversedString += arr.pop()
     }
     return reversedString
 }

 console.log(reverse("seyiObembe"))