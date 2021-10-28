// name = window.prompt("Enter your name here please")

function separateName(name){
    let newName = ""
    for ( let key in name ){
        newName += (name[key] + ++key)
    }
    console.log(newName)
}

separateName("Saheed")

let native = {
    name: "",
    age: "",
    gender: "",
    height: "",
    hobby: ""
}

console.log(native)

let otherNative = {}

function createObject(name, age, gender, height, hobby){
    this.name = name
    this.age = age
    this.gender = gender
    this.height = height
    this.hobby = hobby
}

let newNative = new createObject("jerry", 12, "male", "6.17", "sleeping")
console.log(newNative)

let ageB = newNative.age
console.log(ageB)

let ageC = newNative["age"]
console.log(ageC)

newNative.age = 13;
let newAge = newNative["age"]
console.log(newAge)

delete newNative.age
console.log(newNative)

for (let jerry in newNative){
    console.log(jerry)
}

console.log(Object.entries(newNative))

let cohort8Native = {
    fullName : "tife olanipekun",
    gender : "male",
    height : "Tall",
    hobby : "preacher",
    getFullName: function () {
        return this.fullName
    }
}

console.log(cohort8Native.getFullName())
console.log(cohort8Native)

let returnFullName = cohort8Native.getFullName.bind(cohort8Native)

console.log(returnFullName)

cohort8Array = ["jerry", "femi", "toye", "Gide", "Mojo", "Ozi"]
for ( let value of cohort8Array){
    console.log(value)
}

for (let key in cohort8Array){
    console.log(key)
}