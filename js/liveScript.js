


var btnCalculate  = document.getElementById("button")


btnCalculate.addEventListener("click" , function(){
    


    var nomeBurger = document.getElementById("name");
    // if (nomeBurger = " "){

//     alert("devi scrivere il nome del tuo panino")
// }
    
    
    
    var ingredienti = document.getElementsByClassName("ingredient-checkbox")
    console.log(ingredienti)
    var somma = 50;

    for (var i = 0; i<ingredienti.length; i++){

        var ingrediente = ingredienti[i];

        if(ingrediente.checked){
            console.log(ingrediente)
            somma = somma + parseInt(ingrediente.value)
        }
    }

    
    document.getElementById("price").innerHTML = somma
})





