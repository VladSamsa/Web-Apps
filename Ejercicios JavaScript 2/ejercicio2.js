var boton2=document.getElementById("boton2");

boton2.addEventListener("click", function esPalindromo(palabra) {
    // Eliminar espacios en blanco y convertir a minúsculas
    const palabraProcesada = palabra.toLowerCase().replace(/\s/g, '');
      
    // Revertir la cadena
    const palabraRevertida = palabraProcesada.split('').reverse().join('');
  
    // Verificar si es un palíndromo
    return palabraProcesada === palabraRevertida;
  })
  
  // Pedir al usuario que ingrese una palabra o frase
  const palabraIngresada = prompt("Ingresa una palabra o frase para verificar si es un palíndromo:")
  
  // Llamar a la función y mostrar el resultado
  if (esPalindromo(palabraIngresada)) {
    alert("¡Es un palíndromo!")
  } else {
    alert("No es un palíndromo.")
  }
 

