// Calculadora simple: 
// Declara tres variables: a (un número), operador (un operador aritmético como 
// cadena), y b (otro número). Utiliza condicionales para realizar la operación 
// correspondiente y muestra el resultado.

let a = 5;
let b = 3;
let operador = '+';

if (operador === '+') {
    console.log(a + b);
} else if (operador === '-') {
    console.log(a - b);
} else if (operador === '*') {
    console.log(a * b);
} else if (operador === '/') {
    if (b !== 0) {
        console.log(a / b);
    } else {
        console.log('Error: División por cero');
    }
} else {
    console.log('Error: Operador no válido');
}