/*
    Consignas:
    https://docs.google.com/document/d/1_9DVisyxjXD68xkNscnKUUiipNEdfkHejZ5D8VXZ1ic/edit?usp=sharing
*/


/*
    Ejercicio 12
    Solicitar al usuario que ingrese su edad y una bebida. (Entre: Cerveza, jugo, agua). Si pide alcohol y es menor de edad que le salte un alerta indicando que no puede realizar la compra. Indicar el costo y solicitar al usuario que indique con cuanto va a pagar e indicar cuánto sería su vuelto. 
    (Ej: La cerveza cuesta $50  y paga con 100, se le debe devolver $50. Si indica que paga con menos de lo que cuesta el producto, indicar un error).
*/

let edad = prompt("¿Que edad tenes?");
let bebida = prompt("¿Que bebida queres?\n 1.Cerveza\n2.Jugo\n3.Agua");

if(bebida == 1 && edad >= 18){
    alert("La cerveza cuesta 480$");
    let pago = prompt("¿Con cuanto vas a pagar?");
    if(parseInt(pago) < 480){
        alert("El monto para realizar el pago es insuficiente");
    } else {
        const vuelto = parseInt(pago) -480
        alert("Muchas gracias por tu compra, tu vuelto es " + vuelto);
    }
} else if(bebida == 1 && edad < 18){
    alert("No puedo venderte porque no tenes 18");
}

if(bebida == 2){
    alert("El juguito cuesta 320$");
    let pago = prompt("¿Con cuanto vas a pagar?");
    if(parseInt(pago) < 320){
        alert("El monto para realizar el pago es insuficiente");
    } else {
        const vuelto = parseInt(pago) -320
        alert("Muchas gracias por tu compra, tu vuelto es " + vuelto);
    }
}

if(bebida == 3){
    alert("El agua cuesta 120$");
    let pago = prompt("¿Con cuanto vas a pagar?");
    if(parseInt(pago) < 120){
        alert("El monto para realizar el pago es insuficiente");
    } else {
        const vuelto = parseInt(pago) - 120
        alert("Muchas gracias por tu compra, tu vuelto es " + vuelto);
    }
}

/* ======================================================================== */
/* 
    Bonus: Ejercicio 1
    Solicitar al usuario su clave de 4 dígitos (que tendremos almacenada en una variable) y el monto a retirar. Si la clave es correcta y el monto mayor al balance, realizar la operación. Sino, mostrar un mensaje de error en caso de ser la clave incorrecta o pedir más dinero del disponible.
*/

// Definimos valores estaticos de la clave y el balance
const password = "1234";
const balance = 50000;

// Solicitamos la clave al usuario
const ingresarClave = prompt("Por favor, ingrese su clave numerica");
if (ingresarClave === password){
    let retiro = prompt("Bienvenide! su balance es: " + balance + "\n¿Cuanto desea retirar?");
    if(retiro > balance){
        alert("Fondos insuficientes para realizar esta transacción");
    } else {
        let balanceFinal = balance - retiro;
        alert("Retiraste: " + retiro + " , tu balance final es: " + balanceFinal);
    }
} else {
    alert("La contraseña ingresada no es correcta, recarga la pagina y volve a intentarlo nuevamente");
}

/* ======================================================================== */

/* 
    Bonus: Ejercicio 2
    Solicitar al usuario su día y mes de nacimiento e indicar cual es su signo zodiacal.
*/

let diaNacimiento = prompt("¿En que dia naciste? (numero de dia)");
let mesNacimiento = prompt("¿En que mes naciste? (numero de mes)");

if((diaNacimiento >= 21 && mesNacimiento == 3) || (diaNacimiento <= 20 && mesNacimiento == 4)) {
    alert("Sos de Aries");
}
if((diaNacimiento >= 20 && mesNacimiento == 4) || (diaNacimiento <= 21 && mesNacimiento == 5)) {
    alert("Sos de Tauro");
}
if((diaNacimiento >= 21 && mesNacimiento == 5) || (diaNacimiento <= 20 && mesNacimiento == 6)) {
    alert("Sos de Geminis");
}
if((diaNacimiento >= 21 && mesNacimiento == 6) || (diaNacimiento <= 22 && mesNacimiento == 7)) {
    alert("Sos de Cancer");
}
if((diaNacimiento >= 23 && mesNacimiento == 7) || (diaNacimiento <= 22 && mesNacimiento == 8)) {
    alert("Sos de Leo");
}
if((diaNacimiento >= 23 && mesNacimiento == 8) || (diaNacimiento <= 22 && mesNacimiento == 9)) {
    alert("Sos de Virgo");
}
if((diaNacimiento >= 23 && mesNacimiento == 9) || (diaNacimiento <= 22 && mesNacimiento == 10)) {
    alert("Sos de Libra");
}
if((diaNacimiento >= 23 && mesNacimiento == 10) || (diaNacimiento <= 21 && mesNacimiento == 11)) {
    alert("Sos de Escorpio");
}
if((diaNacimiento >= 22 && mesNacimiento == 11) || (diaNacimiento <= 21 && mesNacimiento == 12)) {
    alert("Sos de Sagitario");
}
if((diaNacimiento >= 22 && mesNacimiento == 12) || (diaNacimiento <= 19 && mesNacimiento == 1)) {
    alert("Sos de Capricornio");
}
if((diaNacimiento >= 20 && mesNacimiento == 1) || (diaNacimiento <= 18 && mesNacimiento == 2)) {
    alert("Sos de Acuario");
}
if((diaNacimiento >= 19 && mesNacimiento == 2) || (diaNacimiento <= 20 && mesNacimiento == 3)) {
    alert("Sos de Piscis");
}

