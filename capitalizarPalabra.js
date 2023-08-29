// function capitalizarPalabras(titulo) {
//   let palabras = titulo.split(' ');
//   for (let i = 0; i < palabras.length; i++) {
//     palabras[i] = palabras[i].charAt(0).toUpperCase() + palabras[i].slice(1);
//   }
//   return palabras.join(' ');
// }
// alert(capitalizarPalabras('esto es un título'));

const capitalizarPalabras = (titulo) => {
  let palabras = titulo.split(' ');
  for (let i = 0; i < palabras.length; i++) {
    palabras[i] = palabras[i].charAt(0).toUpperCase() + palabras[i].slice(1);
  }
  return palabras.join(' ');
}
alert(capitalizarPalabras('esto es un título'));