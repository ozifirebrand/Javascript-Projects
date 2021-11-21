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

 let reverseFunction = (word)=>{
     let wordArray =[];
     let reversedString = "";

     for (let character of word){
         wordArray.push(character);
     }

     while (wordArray.length>0){
         reversedString += wordArray.pop();
     }
     return reversedString;
 }
 console.log(reverseFunction("seyiObembe"))

 Queue.prototype.enqueue = function (e){
     this.elements.push(e);
 };

 function Queue(){
     this.elements = []
     this.elements.push(8)
 }