let palabra= prompt("ingrese una palabra en mayúsculas o minúsculas")


function invertirPalabra(palabra) {
  let arrayPalabra = palabra.split('');
   for (let i = 0; i < arrayPalabra.length; i++) {
    if (arrayPalabra[i] === arrayPalabra[i].toUpperCase()) {
      arrayPalabra[i] = arrayPalabra[i].toLowerCase();
    } else {
      arrayPalabra[i] = arrayPalabra[i].toUpperCase();
    }
  }
   return arrayPalabra.join('');
}
 alert(invertirPalabra(palabra));