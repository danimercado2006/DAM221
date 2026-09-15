console.log("--- Hola Mundo Node ---");
let edad1=19;
let edad2=7;
console.log("Edad promedio: " + (edad1+edad2)/2);

console.log("--- Medir Procesos ---");

console.time("Mi proceso");
    for(i=0;i<1000000000000000000000000;i++)
    {

    }
console.timeEnd("Mi proceso");