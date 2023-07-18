var boton3=document.getElementById("boton3");

boton3.addEventListener("click", function calcularSumaDigitos(numero) {
    // Convertir el número a una cadena
    const numeroCadena = numero.toString();
    
    let sumaDigitos = 0;
    for (let i = 0; i < numeroCadena.length; i++) {
      // Obtener cada dígito individual y sumarlo a la suma total
      sumaDigitos += parseInt(numeroCadena[i]);
    }
  
    return sumaDigitos;
  })
  
  // Pedir al usuario que ingrese un número
  const numeroIngresado = parseInt(prompt("Ingresa un número para calcular la suma de sus dígitos:"));
  
  // Llamar a la función y mostrar el resultado
  const resultado = calcularSumaDigitos(numeroIngresado);
  alert("La suma de los dígitos del número " + numeroIngresado + " es: " + resultado);   