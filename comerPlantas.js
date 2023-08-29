function comer(plantas) {
    let conejoIndex = plantas.indexOf('🐰');
    let prohibidoIndex = plantas.indexOf('🚫');
     if (conejoIndex === -1 || prohibidoIndex === -1) {
      return plantas;
    }
     let plantasIzquierda = plantas.slice(0, conejoIndex);
    let plantasDerecha = plantas.slice(prohibidoIndex + 1);
     return plantasIzquierda + plantasDerecha;
  }
   console.log(comer('🐰🥕🥬🥕🚫')); // ''
  console.log(comer('🥕🥬🐰🥕🥕🥕🚫')); // '🥕🥬'
  console.log(comer('🐰🥕🥬🥕🚫🥕')); // '🥕'
  console.log(comer('🌱🥕🌱🐰🌱🥬🌱🌱🚫🌷')); // '🌱🥕🌱🌷'