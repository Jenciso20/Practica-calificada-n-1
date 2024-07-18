function calcularVolumen(largo, ancho, alto) {
    return largo * ancho * alto; //
    }
    function calcularDimensionesDeLosPaquetes(numeroPaquete) {
    let largo = parseFloat(prompt("Introduce el largo del paquete: "));
    let ancho = parseFloat(prompt("Introduce el ancho del paquete: "));
    let alto = parseFloat(prompt("Introduce el alto del paquete: "));
    return {largo, ancho, alto};
    }
    let paquete1 = calcularDimensionesDeLosPaquetes(1);
    let paquete2 = calcularDimensionesDeLosPaquetes(2);
    let paquete3 = calcularDimensionesDeLosPaquetes(3);
    
    let mayorVolumen = Math.max(Volumen1, Volumen2, Volumen3);
    
    let paqueteMayorVolumen;
    if (mayorVolumen === volumen1)
        paqueteMayorVolumen = "Paquete 1";
    else if (mayorVolumen === volumen2)
        paqueteMayorVolumen = "Paquete 2";
    else
    paqueteMayorVolumen = "Paquete 3";
    
    console.log("Volumen del paquete 1: " + volumen1);
    console.log("Volumen del paquete 2: " + volumen2);
    console.log("Volumen del paquete 3: " + volumen3);
    console.log("El paquete con el mayor volumen es: " + paqueteMayorVolumen);