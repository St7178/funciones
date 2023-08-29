let texto = prompt("ingrese texto")
let conteo= 0
for (let i=0; i<texto.length; i++){
let letra = texto[i].toLocaleLowerCase();
if(letra==="a" ||letra==="e " || letra==="i" || letra==="o"|| letra==="u"){
conteo++
}
}
alert("la cantidad de vocales en la cadena de texto es: \n" +conteo)

