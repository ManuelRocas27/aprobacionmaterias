let parciales, talleres, promedio
parciales = parseFloat(prompt("Parciales"));
talleres = parseFloat(prompt("Talleres"));
promedio = (parciales+talleres)/2

if(promedio => 3 ){
    alert("El promedio es "+promedio+" con lo cual APRUEBAS la materia");
} else{
    alert("El promedio es "+promedio+" con lo cual DESARPUEBAS la materia")
}