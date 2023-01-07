function convertTemperature(){
    let val = document.getElementById("input_value");
    let result = document.getElementById("result");
    let output = document.getElementById("output");

    val.addEventListener("keyup", convertTemperature);
    output.addEventListener("change", convertTemperature);

    let inputValue = "celsius";
    let outputValue = output.value;

    //Celsius
    if(outputValue === "fahrenheit"){
      result.value = Number((val.value) * 9/5) + 32;
    }else if(outputValue === "kelvin"){
      result.value = Number(val.value) + 273.15;
    }
  }

  function reset(){
    convertTemperature();
  }