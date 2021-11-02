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

function printFirstName(anObject){
    console.log(anObject.firstName)
}

function getFullNames(anObject){
    let arrayOfFullNames = [];
    for (let i = 0; i < anObject.length; i++){
        arrayOfFullNames.push(anObject[i].firstName+ " " +anObject[i].lastName)
    }
    return arrayOfFullNames
}

objArray.forEach(printFirstName)

let map = new Map();
map.set("fullName", getFullNames(objArray))
console.log(map.get("fullName"))

let getMaleGender = (anObject)=>{
    if (anObject.gender === "male")
    return anObject
}

let getFemaleGender = (anObject)=>{
    if (anObject.gender ==="female") return anObject
}

for (let i = 0; i < objArray.length; i++) {
    let eachObject = objArray[i]
    let eachMaleGender = getMaleGender(eachObject)
    console.log(objArray.filter(getMaleGender))
    break
}
for (let i = 0; i < objArray.length; i++) {
    let eachObject = objArray[i]
    let eachMaleGender = getFemaleGender(eachObject)
    console.log(objArray.filter(getFemaleGender))
    break
}


