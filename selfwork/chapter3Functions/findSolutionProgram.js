function findSolution(givenTarget) {
    function find(currentValue, history) {
        if (currentValue === givenTarget){
            return history;
        } else if (currentValue > givenTarget){
            return null;
        } else {
            return find(currentValue + 5,`(${history} + 5)`)||
                find(currentValue * 3, `(${history} * 3)`);
        }
    }
    return find(1, "1")
}

console.log(findSolution(24))