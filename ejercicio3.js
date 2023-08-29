let numeros = prompt("ingrese numeros")

let mayor = numeros[0];
 
for (let i = 1; i < numeros.length; i++) {
  if (numeros[i] > mayor) {
    mayor = numeros[i];
  }
}

alert("El número mayor es: " + mayor);