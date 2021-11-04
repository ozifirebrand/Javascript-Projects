let documentPseudo = {
    addEventListenerPseudo: function (event, aFunction){
        switch (event){
            case "click":
                aFunction(event, "1")
                break;
            case "change":
                aFunction(event, "2")
                break;
            case "hover":
                aFunction(event, "3")
                break;
            default:
                break
        }
    }
}

let myFunction = (event, number) => console.log(event, number)

documentPseudo.addEventListenerPseudo("hover", myFunction)