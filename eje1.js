let a = 120;
let b = 200;
let c = 150;

let mayor;

if (a > b && a > c) {
    mayor = a;
} else if (b > a && b > c) {
    mayor = b;
} else {
    mayor = c;
}


console.log("El mayor número es:", mayor);
