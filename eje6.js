/*
6.- El jugador con más puntos:
Dada una lista de tres jugadores con sus respectivas puntuaciones (jugador1,
jugador2, jugador3), determina quién de ellos tiene la puntuación más alta.
*/
puntuaciones = [85, 92, 78]
let jugador1=puntuaciones[0];
let jugador2=puntuaciones[1];
let jugador3=puntuaciones[2];
if(jugador1>jugador2 && jugador1>jugador3){
    console.log('El jugador 1 tiene la puntucion mas alta con:',jugador1);
}else if(jugador2>jugador1 && jugador2>jugador3){
    console.log('El jugador 2 tiene la puntucion mas alta con:',jugador2);
}else{
    console.log('El jugador 3 tiene la puntucion mas alta con:',jugador3);
}