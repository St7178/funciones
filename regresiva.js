function cuentaRegresiva(inicial){
    let numeros = [];
    for(let i = 0; i <= inicial; i++ ){
        numeros.push(i)
    }
    return numeros.reverse()
}
alert(cuentaRegresiva(10))