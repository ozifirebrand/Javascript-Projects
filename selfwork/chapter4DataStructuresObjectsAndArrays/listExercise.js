function arrayToList(anArray){
    let aValue
    let rest
    let anObject = {aValue, rest}
    for (let index= 0; index < anArray.length; index++){
        anObject.aValue = anArray[index]
        if (!(anArray[index+1] === null)){
            anObject.rest = anObject
        }else {
            anObject.rest = null
        }
    }
    return anObject
}

let array= [1,2]
console.log(arrayToList(array))