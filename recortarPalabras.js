// function recortar(cantidadLetras, palabras) {
//     let palabrasRecortadas = [];
//      for (let i = 0; i < palabras.length; i++) {
//       let palabra = palabras[i];
//       let palabraRecortada = palabra.substring(0, cantidadLetras);
//       palabrasRecortadas.push(palabraRecortada);
//     }
//      return palabrasRecortadas;
//   }
//    let resultado = recortar(4, ['elefante', 'dinosaurio', 'chocolate', 'avion', 'america']);
//    let resultado2= recortar(1, ['algoritmo', 'bug', 'compilador'])
// //   alert(resultado);
//   alert(resultado2) 

const recortar = (cantidadLetras, palabras) => {
  let palabrasRecortadas = [];
  for (let i = 0; i < palabras.length; i++) {
    let palabra = palabras[i];
    let palabraRecortada = palabra.substring(0, cantidadLetras);
    palabrasRecortadas.push(palabraRecortada);
  }
  return palabrasRecortadas;
}
let resultado = recortar(4, ['elefante', 'dinosaurio', 'chocolate', 'avion', 'america']);
let resultado2 = recortar(1, ['algoritmo', 'bug', 'compilador']);
console.log(resultado);
// console.log(resultado2);