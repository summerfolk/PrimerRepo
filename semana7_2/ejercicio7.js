function Descuento() {
    let precioOriginal = parseFloat(prompt("ingrese el precio: "));
    let Descuento = parseFloat(prompt("ingrese el descuento: "));
    let precioFinal = (precioOriginal*(Descuento/100));
    alert("Precio original: "+precioOriginal+"!\n"+
        " Descuento: "+Descuento+"!\n"+
        " Precio Final: "+precioFinal);
}