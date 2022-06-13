

var Total=0;

function toCalculateTotal(){

var zaSize= document.getElementsByName("pizzaSize");

    var crustSize= document.getElementsByName("crustSize");

    if(crustSize[0].checked)
    {
    document.getElementById("crustStyle").innerHTML= "Crust Style: Thin Crust";
    }

    else if(crustSize[1].checked)
    {
    document.getElementById("crustStyle").innerHTML= "Crust Style: Hand Tossed";
    }

    else if(crustSize[2].checked)
    {
    document.getElementById("crustStyle").innerHTML= "Crust Style: Regular";
    }


    var pizzaStyle= document.getElementsByName("pizzaStyle");


    if(pizzaStyle[0].checked) {



        if(zaSize[0].checked)
        {
            document.getElementById("Pizza").innerHTML= "Small Size Vege $10";

            Total += 10;

        }

        else if(zaSize[1].checked)
        {
            document.getElementById("Pizza").innerHTML= "Medium Size Vege $12";

            Total += 12;
        }

        else if(zaSize[2].checked)
        {
            document.getElementById("Pizza").innerHTML= "Large Size Vege $14";

            Total += 14;
        }

        else if (zaSize[3].checked)
        {
            document.getElementById("Pizza").innerHTML= "No Pizza Size Selected";
            Total += 0;
        }
    }

    else if(pizzaStyle[1].checked){

        if(zaSize[0].checked)
        {
            document.getElementById("Pizza").innerHTML= "Small Size Pepperoni $20";

            Total += 20;

        }

        else if(zaSize[1].checked)
        {
            document.getElementById("Pizza").innerHTML= "Medium Size Pepperoni $22";
            Total += 22;
        }

        else if(zaSize[2].checked)
        {
            document.getElementById("Pizza").innerHTML= "Large Size Pepperoni $24";
            Total += 24;
        }

        else if (zaSize[3].checked)
        {
            document.getElementById("Pizza").innerHTML= "No Pizza Size Selected";
            Total += 0;

        }
    }

    else if(pizzaStyle[2].checked)
    {

        if(zaSize[0].checked)
        {
            document.getElementById("Pizza").innerHTML= "Small Size Cheese $30";
            Total += 30;

        }

        else if(zaSize[1].checked)
        {
            document.getElementById("Pizza").innerHTML= "Medium Size Cheese $32";
            Total += 32;

        }

        else if(zaSize[2].checked)
        {
            document.getElementById("Pizza").innerHTML= "Medium Size Cheese $34";
            Total += 34;

        }

        else if (zaSize[3].checked)
        {
            document.getElementById("Pizza").innerHTML= "No Pizza Size Selected";
            Total += 0;

        }
    }

var selectedValue = document.getElementById("Drink").value;

    Total += parseInt(selectedValue);

    if(isNaN(a) || isNaN(b) || isNaN(c)){
        document.getElementById("calcAmount").innerHTML = "Select items" +
        "for order";}
    else{
    document.getElementById("calcAmount").innerHTML="Calculate Amount: $" + Total;
    }

}

function displayDrink(){

        let selection = document.querySelector('select');
        let result = document.querySelector('#Beverage');

        selection.addEventListener('change', ()=>{
            result.innerText = selection.options[selection.selectedIndex].text;});

        document.getElementById("Beverage").innerHTML= result.innerText ;

}

function resetTotal(){
document.getElementById("Pizza").innerHTML= "Cart Reset";
document.getElementById("crustStyle").innerHTML= "";
Total = 0;
document.getElementById("calcAmount").innerHTML="Calculate Amount: $" + Total;
}


