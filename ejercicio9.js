function ListaDeNumeros(){
    let numeros = [4, 7, 10, 13, 16, 21];
    let contador = 0;

    for (let i=0; i<numeros.length; i++){
        if (numeros[i] % 2 === 0 ){
            contador++;
        }
    }
    alert("la cantidad de numeros pares es: "+contador);
}