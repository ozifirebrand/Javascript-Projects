let objArray = [
    {
        firstName: "Jojo",
        lastName : "Moyo",
        gender: "female"
    },
    {
        firstName: "Ire",
        lastName: "Ore",
        gender: "male"
    },
    {
        firstName: "Ewalomo",
        lastName: "Sunita",
        gender: "male"
    },
    {
        firstName: "Aje",
        lastName: "Ozi",
        gender: "female"
    }
]

let question1 = "Using array method forEach, print out the firstname"
let question2 = "Using array method map, print out a new key full name " +
    "per object and the value would be the combination of" +
    "the firstname and the last name"
let question3 = "Using array method filter, return an array containing  an object with a" +
    "gender male"
let question4 = "Do question 3 above for object with gender female"
let question5 = "Create a new key age per object, the value of age per object is" +
    "equivalent to the total sum of both the firstname and last name"
let assignment = "Read on event listeners in DOM Manipulation "

// todo 1.

function printFirstName(anObject){
    console.log(anObject.firstName)
}
objArray.forEach(printFirstName)


// todo 2.

function getFullNames(anObject){
    let arrayOfFullNames = [];
    for (let i = 0; i < anObject.length; i++){
        arrayOfFullNames.push(anObject[i].firstName+ " " +anObject[i].lastName)
    }
    return arrayOfFullNames
}

let map = new Map();
map.set("fullName", getFullNames(objArray))
console.log(map.get("fullName"))


// todo 3 and 4.

let getMaleGender = (anObject)=>{
    if (anObject.gender === "male")
    return anObject
}

let getFemaleGender = (anObject)=>{
    if (anObject.gender ==="female") return anObject
}

for (let i = 0; i < 1; i++) {
    console.log(objArray.filter(getMaleGender))
}
for (let i = 0; i < 1; i++) {
    console.log(objArray.filter(getFemaleGender))
}

// todo 5.

let you = "We need a new key" +
    "This key is age" +
    "It is calculated by adding the length of first and last name" +
    "We will print the object out with the keys and values"

let calculateLengthOfNames= (anObject)=> anObject.firstName.length + anObject.lastName.length;
for (let i = 0; i < objArray.length; i++) {
    let ageFunction = age=> objArray.forEach(calculateLengthOfNames(objArray[i]))
    map.set("age", ageFunction  )

}
console.log(map.get("age"))