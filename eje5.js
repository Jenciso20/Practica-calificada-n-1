// Número máximo entre cuatro números: 
// Declara cuatro variables a, b, c y d con valores numéricos. Utiliza condicionales 
// para determinar cuál de los cuatro números es el mayor y muéstralo.

let a = 10;
let b = 5;
let c = 8;
let d = 15;

if (a > b && a > c && a > d) {
    console.log("El número mayor es: " + a);
} else if (b > a && b > c && b > d) {
    console.log("El número mayor es: " + b);
} else if (c > a && c > b && c > d) {
    console.log("El número mayor es: " + c);
} else if (d > a && d > b && d > c) {
    console.log("El número mayor es: " + d);
} else {
    console.log("Todos los números son iguales.");
}