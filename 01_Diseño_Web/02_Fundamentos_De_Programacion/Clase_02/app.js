// Un condicional es la respuesta de nuestro programa a determinada situacion o "condicion" la cual, SI se cumple, nos va a responder de N forma y SINO nos va a dar otra respuesta.

/*
    SI tengo 18 años o más de 18 años:
        Soy mayor de edad
    SINO:
        No soy mayor de edad
*/

// Vamos a pasar el condicional de arriba a codigo.

const edad = prompt("¿Que edad tenes?");

if(edad >= 18 && edad <= 21){
    alert("Sos mayor de edad y naciste a partir del año 2000");
} else if(edad > 21){
    alert("Sos mayor de edad y naciste antes del año 2000");
} else {
    alert("Sos menor de edad");
}

/*

 = : Compara de forma no estricta y evalua si sobre-escribir el valor de una condicion, este operador jamas se utiliza en un condicional

 == : Comparar de forma NO estricta el valor de nuestra variable con la condicion a cumplir.

 === : Compara de forma estricta, nuestra variable o dato con el valor de la condicion a cumplir.

 <> : El simbolo menor y mayor, lo que hacen es delimitar un vector numerico en el cual nuestra condicion se cumple o no.

 && : Representa el valor AND o Y en español, y su funcion es la de concatenar varias condiciones que deben cumplirse para ejecutar las instrucciones que se encuentran dentro de IF

 || : OR u O en español, en donde su funcion, es que SI se cumple una condicion O la otra condicion, se ejcuta lo que esta dentro de nuestro condicional.

*/

//----------------------------------------------------------------------------------------------------------------------------//

// Switch statement

switch (new Date().getDay()){
    case 0:
        day = "Domingo";
        alert(day);
        break;
    case 1:
        day = "Lunes";
        alert(day);
        break;
    case 2:
        day = "Martes";
        alert(day);
        break;
    case 3: 
        day = "Miercoles";
        alert(day);
        break;
    case 4:
        day = "Jueves";
        alert(day);
        break;
    case 5:
        day = "Viernes";
        alert(day);
        break;
    case 6:
        day = "Sabado";
        alert(day);
}