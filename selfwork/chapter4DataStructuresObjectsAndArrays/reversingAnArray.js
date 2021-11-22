function reverseArray(anArray){
    let aNewArray=[]
    for (let index =anArray.length-1; index>=0;index--){
        aNewArray.push(anArray[index])
    }
    console.log(aNewArray)
}

let array = [4,3, 2,9]
reverseArray(array)

//todo to be completed
function reverseArrayInPlace(anArray){
    for (let index1 = 0 ; index1<(anArray.length)/2; index1++){
        for (let index2 = anArray.length-1; index2>= (anArray.length)/2; index2--){
            let aValue = anArray[index2]
            anArray[index2] = anArray[index1]
            console.log(aValue, index2)
        }
    }
    return anArray
}

console.log(reverseArrayInPlace(array))