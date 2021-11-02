let objArray = [
    {
        firstName: "Jojo",
        lastName : "Moyo",
    },
    {
        firstName: "Ewalomo",
        lastName: "Sunita",
    },
    {
        firstName: "Aje",
        lastName: "Ozi",
    }
]

let question1 = "Using array method forEach, print out the firstname"
let question2 = "Using array method map, print out a new key full name " +
    "per object and the value would be the combination of" +
    "the firstname and the last name"

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
