function Temperatura(){
    let celsius = parseFloat(prompt("ingrese los grados celcius: "));
    let fahrenheit = (celsius*(9/5)+32);
    alert("Temperatura en Celsius: "+celsius+" °C"+ "!\n"+
    "Temperatura en fahrenheit: "+ fahrenheit);
}