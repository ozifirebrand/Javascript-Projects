function reverseArray(anArray){
    let aNewArray=[]
    for (let index =anArray.length-1; index>=0;index--){
        aNewArray.push(anArray[index])
    }
    console.log(aNewArray)
}

let array = [4,3, 2,9]
reverseArray(array)

function reverseArrayInPlace(anArray){
    for (let index1 = 0 ; index1<(anArray.length)/2; index1++){
        console.log(anArray[index1])
        for (let index2 = anArray.length-1; index2> (anArray.length)/2; index2--){
            console.log(anArray[index2])
            //todo 4329
            let aValue = anArray[index1]
            anArray[index1] = anArray[index2]
            anArray[index2] = aValue
            console.log(anArray[index2])

        }
    }
    return anArray
}

console.log(reverseArrayInPlace(array))