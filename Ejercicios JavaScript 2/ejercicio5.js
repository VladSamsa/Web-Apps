var boton5=document.getElementById("boton5");

boton5.addEventListener("click", function generarSecuenciaFibonacci(numero) {
    if (numero <= 0) {
      throw new Error("El número debe ser mayor que cero.");
    }
  
    const secuencia = [0, 1];
  
    while (secuencia[secuencia.length - 1] + secuencia[secuencia.length - 2] <= numero) {
      const nuevoNumero = secuencia[secuencia.length - 1] + secuencia[secuencia.length - 2];
      secuencia.push(nuevoNumero);
    }
  
    return secuencia;
  })
  
  // Pedir al usuario que ingrese el número
  const numeroIngresado = parseInt(prompt("Ingresa un número para generar la secuencia de Fibonacci:"));
  
  try {
    // Llamar a la función y mostrar el resultado
    const secuenciaFibonacci = generarSecuenciaFibonacci(numeroIngresado);
    alert("La secuencia de Fibonacci hasta " + numeroIngresado + " es: " + secuenciaFibonacci.join(", "));
  } catch (error) {
    alert(error.message);
  }
  
