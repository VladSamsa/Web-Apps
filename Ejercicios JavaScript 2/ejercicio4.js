var boton4=document.getElementById("boton4");

boton4.addEventListener("click", function generarNumeroAleatorioEnRango(min, max) {
    // Verificar que el rango sea válido
    if (min >= max) {
      throw new Error("El rango es inválido. El valor mínimo debe ser menor que el valor máximo.");
    }
  
    // Calcular el número aleatorio dentro del rango
    const numeroAleatorio = Math.floor(Math.random() * (max - min + 1)) + min;
  
    return numeroAleatorio;
  })
  
  // Pedir al usuario que ingrese el rango de números
  const minimo = parseInt(prompt("Ingresa el valor mínimo del rango:"));
  const maximo = parseInt(prompt("Ingresa el valor máximo del rango:"));
  
  try {
    // Llamar a la función y mostrar el resultado
    const numeroAleatorio = generarNumeroAleatorioEnRango(minimo, maximo);
    alert("El número aleatorio dentro del rango " + minimo + " y " + maximo + " es: " + numeroAleatorio);
  } catch (error) {
    alert(error.message);
  }
  