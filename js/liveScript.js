
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

    var codiceUno = "ANDREA01"
    var codiceDue = "ANDREA02"
    var codiceTre = "ANDREA03"

    var coupon = document.getElementById("coupon")

    if (coupon.value = codiceUno )
    {

        somma -= ((somma*20)/100)
    }else if (coupon.value = codiceDue){

        somma -= ((somma*30)/100)
    }else if (coupon.value = codiceTre){

        somma -= ((somma*50)/100)
    }else {

        somma
    }
})

