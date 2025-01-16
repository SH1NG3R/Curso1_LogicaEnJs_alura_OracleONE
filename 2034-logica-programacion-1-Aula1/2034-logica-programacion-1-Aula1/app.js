let numeroSecreto=6

// alert('Hola Mundo');

let mensajeDeBienvenida = 'Bienvenido a la aplicación';
alert(mensajeDeBienvenida);

let numeroUsuario = prompt("Me indicas un numero por favor");
console.log(numeroUsuario);

if (numeroUsuario == numeroSecreto) {
    alert('Acertaste el numero!')
}

alert('Bienvenidos al juego del número secreto');
let eleccion = prompt('Elige un número entre 1 y 10');
let numeroSecreto = 4;
if (eleccion == numeroSecreto) {
    alert('Adivinaste');
}

let contraseniaDelSistema = "contraseniaPrueba!";

let contrasenia = prompt("Ingrese la contraseña del sistema:");

if (contrasenia = contraseniaDelSistema){
    alert("Acceso al sistema garantizado");
}
