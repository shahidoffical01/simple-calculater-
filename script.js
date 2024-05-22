const display = document.getElementById("display");


function appendToDisplay(input){
    display.value += input;
}

function clearDisplay(){
    display.value = "";
}

function Delete() {
    var currentValue = display.value;
    if (currentValue.length > 0) {
        display.value = currentValue.slice(0, -1);
    }
}
function calculate(){

    try{
    display.value = eval(display.value);
    }
    catch(error){
        display.value = "Error"
    }

};