var boton1=document.getElementById("boton1");

boton1.addEventListener("click", function encontrarNumeroMasGrande() {
  let numeros = [];
  let seguirIngresando = true;

  while (seguirIngresando) {
    let numeroIngresado = prompt("Ingresa un número (o escribe 'fin' para detenerse):");

    if (numeroIngresado.toLowerCase() === "fin") {
      seguirIngresando = false;
    } else {
      let numero = parseFloat(numeroIngresado);

      if (!isNaN(numero)) {
        numeros.push(numero);
      } else {
        alert("Por favor, ingresa un número válido.");
      }
    }
  }

  if (numeros.length > 0) {
    let numeroMasGrande = Math.max(...numeros);
    alert("El número más grande ingresado es: " + numeroMasGrande);
  } else {
    alert("No se ingresaron números válidos.");
  }
})

encontrarNumeroMasGrande();

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