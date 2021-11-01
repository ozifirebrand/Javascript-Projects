function printFarmInventory(cows, chickens){
    let cowString = String(cows)
    while (cowString.length<3){
        cowString = "0"+cowString;
    }
    console.log(`${cowString} Cows`);
    let chickenString = String(chickens);
    while (chickenString.length<3){
        chickenString = "0" +chickenString;
    }
    console.log(`${chickenString} Chickens`);
}

printFarmInventory(7, 11);

function animalInventory(animalName, numberOfAnimal){
    let animalString = String(numberOfAnimal)
    while (animalString.length < 3){
        animalString = "0"+animalString;
    }
    console.log(animalString+ " " + animalName+"s")
}

animalInventory('Goat', 5)