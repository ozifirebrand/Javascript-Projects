function multiplier(factor){
    return number => number * factor;
}

twice = multiplier(2)
console.log(twice(5))

