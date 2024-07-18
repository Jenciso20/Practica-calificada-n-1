let edad =  prompt('Edad: ');

while (edad == null || /\D/.test(edad) || edad == "") {
    edad = prompt("Entre un número VÁLIDO: ");
};
if(edad >= 0 && edad <=11){
    console.log("Es un niño");
}else{
    if(edad >= 12 && edad <= 18){
        console.log("Es un adolescente");
    }else{
        if(edad >= 19 && edad <=59){
            console.log("Es un adulto");
        }else{
            console.log("Es un anciano");
        }
    }
}