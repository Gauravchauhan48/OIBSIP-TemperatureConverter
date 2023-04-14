function temperatureconverter(){

    var x1 = document.getElementById("inputvalue");
    var x2 = document.getElementById("result");
    var x3 = document.getElementById("input");
    var x4 = document.getElementById("output");

    let x5 = x3.value;
    let x6 = x4.value;

    if(x5 === "celsius" && x6 === "Fahrenheit"){
        x2.value = ((x1.value)*9/5)+32; 
    }else if(x5 === "celsius" && x6 === "Kelvin"){
        x2.value = Number(x1.value) + 273.15; 
    }else if(x5 === "celsius" && x6 === "celsius"){
        x2.value = x1.value; 
    }
    

    if(x5 === "Fahrenheit" && x6 === "Fahrenheit"){
        x2.value = x1.value; 
    }else if(x5 === "Fahrenheit" && x6 === "Kelvin"){
        x2.value = ((x1.value-32)*5/9)+273.15; 
    }else if(x5 === "Fahrenheit" && x6 === "celsius"){
        x2.value = (x1.value-32)*5/9; 
    }

    if(x5 === "Kelvin" && x6 === "Fahrenheit"){
        x2.value = ((x1.value - 273.15)*9/5)+32; 
    }else if(x5 === "Kelvin" && x6 === "Kelvin"){
        x2.value = x1.value; 
    }else if(x5 === "Kelvin" && x6 === "celsius"){
        x2.value = x1.value - 273.15; 
    }
}

