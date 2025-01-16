console.log("Holiwi");

let nombre = Jowako;
console.log (`¡Hola, ${nombre}!`);
alert(`¡Hola, ${nombre}!`);

let lenguaje = prompt("Cuál es el lenguaje de programación que más te gusta?");
console.log (`El lenguaje que mas te gusta es ${lenguaje}`);

let valor1 = 2;
let valor2 = 5;
let resultado = valor1 + valor2;
console.log(`La suma de ${valor1} y ${valor2} es igual a ${resultado}.`);

resultado = valor1 - valor2;
console.log(`La diferencia de ${valor1} y ${valor2} es igual a ${resultado}.`);

let edad = prompt('Ingrese su edad');
if (edad >= 18){
    console.log("Usted es mayor de edad");
} else {
    console.log("Usted esta morrillo");
}

let numero = prompt("ingrese un numero por favor");
if (numero >0){
    console.log("Su numero es Positivo");
} else if (numero<0) {
    console.log("Su numero es Negativo");

} else {
    console.log("Su numero es zero");
}

//probando acortar lo maximo
numero =1;
while (numero <= 10) console.log(numero++);

let nota = 8;
if (nota>=7) console.log("Usted esta aprovado");
    else console.log("Usted Reprobó");

numeroIntAleatorio = parseInt(Math.random() * 10) + 1;
console.log(numeroIntAleatorio);

numeroIntAleatorio = parseInt(Math.random() * 10) + 1;
console.log(numeroIntAleatorio)

numeroIntAleatorio = parseInt(Math.random() * 1000) + 1;
console.log(numeroIntAleatorio);