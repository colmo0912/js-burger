
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

    var coupon = document.getElementById("coupon")

    var codiciSconti =["ANDREA01", "ANDREA02" , "ANDREA03"] 

    for (var i = 0; i < codiciSconti.length; i++){

        var sconto = codiciSconti[i];

        if (coupon.value = sconto )
        {

        somma -= ((somma*20)/100)}
            // }else if (coupon.value= sconto){

            //     somma -= ((somma*30)/100)
            // }else if (coupon.value= sconto){

            //     somma -= ((somma*50)/100)
            // }
    }    

        document.getElementById("price").innerHTML = somma.toFixed(2)

})










