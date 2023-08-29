
let numeros = [1, -2, 3, -4, 5, -6, 7, -8, 9, -10];
 
let positivos = 0;
 
for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] > 0) {
    positivos++;
  }
}
 
alert('los números positivos en el array son: \n' + positivos);

// Dados un array de 10 números, informar cuantos de ellos son positivos.