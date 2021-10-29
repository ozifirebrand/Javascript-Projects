let details = {
    sex : "male",
    status : "Single",
    first_name : "Mojoyin",
    last_name : "Gideon",
    get_full_name : function (anotherFunction){
        console.log(anotherFunction(this))
    }
}

details.get_full_name(function (obj)  {
    let full_name = obj.first_name +" " +obj.last_name
    if (obj.sex === "male"){
        full_name = "Mr" +" " +full_name
    }
    else full_name = "Mrs" +" " +full_name

    return full_name
})