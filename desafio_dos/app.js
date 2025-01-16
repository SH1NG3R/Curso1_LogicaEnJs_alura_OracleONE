// 1.- Pregunta al usuario qué día de la semana es. Si la respuesta es "Sábado" o "Domingo",
//  muestra "¡Buen fin de semana!". De lo contrario, muestra "¡Buena semana!".
let diaElegido = prompt("Que dia es?");
//diaElegido = diaElegido.toLowerCase();
if (diaElegido == "Sábado" || diaElegido == "Domingo"){
    alert("¡Buen fin de semana!");
} else{
    alert ("¡Buena semana!");
}

// 2.- Verifica si un número ingresado por el usuario es positivo o negativo.
//  Muestra una alerta informativa.
let numeroElegido = Number(prompt("Ingrese un Numero:"));
if(numeroElegido>0){
    alert('el numeroElegido es positivo');
}
else if(numeroElegido < 0){
    alert('el numero elegido es negativo');
} else {
    alert('el numero es cero');
}

// 3.- Crea un sistema de puntuación para un juego. 
// Si la puntuación es mayor o igual a 100, muestra "¡Felicidades, has ganado!". En caso contrario,
//  muestra "Intentalo nuevamente para ganar.".
let puntuacion = prompt("Cuantos puntos sacaste?:");
if (puntuacion >= 100) {
    alert("¡Felicidades, has ganado!");
} else {
    alert("Intentalo nuevamente para ganar.");
}

// 4.-Crea un mensaje que informe al usuario sobre el saldo de su cuenta, 
// utilizando un template string para incluir el valor del saldo.
const saldo = 1000; // 
const mensaje = `Usuario, su saldo de su cuenta es de $${saldo}.`;
alert(mensaje);
alert("usted es pooobreee");
console.log(mensaje);

// 5.- Pide al usuario que ingrese su nombre mediante un prompt. 
// Luego, muestra una alerta de bienvenida usando ese nombre.
let nameUsuario = prompt('Ingrese su nombre')
alert('Bienvenido su altesa, su momesa, su barbarosidad, sr ' + nameUsuario);
