let mensajeBienvenida= "¡Bienvenida y bienvenido a nuestro sitio web!";
let Lua;
//let edad = 25;
let numeroDeVentas = 50;
let saldoDisponible = 1000;
let mensajeDeError = "¡Error! Completa todos los campos";

alert(mensajeBienvenida)
alert("¡Error! Completa todos los campos")
alert(mensajeDeError)

let nombre = prompt("Ingresa tu nombre por favor:");
let edad = prompt("Ingrese su edad por favor:");

if (edad >= 18){
    alert("¡Puedes obtener tu licencia de conducir!")
}

else{
    alert("Aun estas morrillo para la licencia")
};