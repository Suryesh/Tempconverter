const celsius = document.getElementById("celsius");
const fahrenheit = document.getElementById("fahrenheit");
const kelvin = document.getElementById("kelvin");

celsius.oninput = function () {
    let f = (parseFloat(celsius.value) * 9) / 5 + 32;
    fahrenheit.value = parseFloat(f.toFixed(4));

    let k = (parseFloat(celsius.value) + 273.15);
    kelvin.value = parseFloat(k.toFixed(4));
}
fahrenheit.oninput = function () {
    let c = ((parseFloat(fahrenheit.value) - 32) * 5) / 9;
    celsius.value = parseFloat(c.toFixed(4));

    let k = (parseFloat(fahrenheit.value) - 32) * 5 / 9 + 273.15;
    kelvin.value = parseFloat(k.toFixed(4));
}
kelvin.oninput = function () {
    let f = (parseFloat(kelvin.value) - 273.15) * 9 / 5 + 32;
    fahrenheit.value = parseFloat(f.toFixed(4));

    let c = (parseFloat(kelvin.value) - 273.15);
    celsius.value = parseFloat(c.toFixed(4));
}