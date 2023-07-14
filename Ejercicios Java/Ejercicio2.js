let calificación = prompt("Ingrese su calificación");

if( calificación >= 0 && calificación < 4 ){
    document.write("-Muy deficiente");
}
else if( calificación > 3 && calificación < 6){
    document.write("-Insuficiente");
}
else if( calificación == 6 ){
    document.write("-Suficiente");
}
else if( calificación == 7){
    document.write("-Bien");
}
else if( calificación > 7 && calificación < 10){
    document.write("-Notable");
}
else if( calificación == 10){
    document.write("-Sobresaliente"); 
}
else{
    document.write("-Ingrese una calificación valida");
}