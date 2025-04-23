let InputValue = document.getElementById("InputValue");
//InputValue = Number(InputValue);
let Celsius_Fahrenheit = document.getElementById("Celsius_Fahrenheit");
let Fahrenheit_Celsius = document.getElementById("Fahrenheit_Celsius");
let displayValue = document.getElementById("displayValue");
let result;
let temp;
let Calculate = document.getElementById("Calculate");
Calculate.onclick = function () {
    if (Fahrenheit_Celsius.checked) {
       temp = Number(InputValue.value);
       result = (temp - 32) * (5/9);
       displayValue.textContent = `${result}°C`;
    } else if (Celsius_Fahrenheit.checked) {
       temp = Number(InputValue.value);
       result = temp * 9/5 + 32;
       displayValue.textContent = `${result}°F`;
     } else {
         displayValue.textContent = `please select conversion`;
     }
}

