let Display = document.getElementById("Display");

function append(value){
    Display.value+=value;
}

function clearDisplay(){
    Display.value = ""
}

 function calculate() {
        try {
            Display.value = eval(Display.value);
        } catch {
            Display.value = "Error";
        }
}

document.addEventListener("keydown", function(event){

    let key = event.key;

    //Numbers and operators

    if("0987654321+-*/.".includes(key)){
        append(key);
    }

    else if(key === "Enter"){
        calculate();
    }

    else if(key === "Backspace"){
        Display.value = Display.value.slice(0,-1);
    }

    else if(key === "Escape"){
        clearDisplay;
    }
});