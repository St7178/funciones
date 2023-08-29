function obtenerResultado(jugadoraA, jugadoraB, puntajesA, puntajesB) {
    let puntosA = 0;
    let puntosB = 0;
     for (let i = 0; i < puntajesA.length; i++) {
      if (puntajesA[i] > puntajesB[i]) {
        puntosA++;
      } else if (puntajesA[i] < puntajesB[i]) {
        puntosB++;
      }
    }
     if (puntosA > puntosB) {
      return jugadoraA;
    } else if (puntosA < puntosB) {
      return jugadoraB;
    } else {
      return "Empate";
    }
  }

  const puntajesA = [3, 5, 2];
  const puntajesB = [4, 6, 2];
  const resultado = obtenerResultado("Jugadora A", "Jugadora B", puntajesA, puntajesB);
   alert(resultado); 