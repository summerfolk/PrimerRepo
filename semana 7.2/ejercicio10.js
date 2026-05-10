function PromedioRendimiento(){
    let promedio = parseFloat(prompt("ingrese el promedio: "));
    if (promedio<11){
        alert("Promedio del estudiante: "+promedio+ " nivel de estudiante: bajo");
    }
    else if (promedio<15){
        alert("Promedio del estudiante: "+promedio+ " nivel de estudiante: regular");
    }
    else if (promedio<20){
        alert("Promedio del estudiante: "+promedio+ " nivel de estudiante: exelente");
    }
}