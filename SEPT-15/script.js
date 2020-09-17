/* Condicionales- Es un grupo de intrucciones que se pueden ejecutar o no dependiendo de si se cumple una condicion */

/* Creamos una funcion llamada color */
function color() {
    /* Pedimos el color y lo almacenamos en una variable */
    let colorUsuario = prompt("Ingrese un color en INGLES");
    let colorEsperado = "red";

    /* Convertimos el color ingresado en minuscula para poder compararlos */
    let minuscula = colorUsuario.toLowerCase();
    /* toLoweCase- Convertir a minuscula
    toUpperCase-Convertir a mayuscula */
    /* El color ingresado es igual al esperado? */
    if (minuscula == colorEsperado) {
        /* Este bloque de codigo */
        document.write("<h1 style='color: red' > El color es RED!!! </h1>")
    } else {
        /* Ejecute este otro bloque de codigo */
        document.write("<h1> Nooo es RED!! El color ingresado fue " + colorUsuario + "</h1>")
    }
}

/* Operados de comparacion 
== IGUALES 2 y "2"
=== ESTRICTAMENTE IGUAL, DEBEN SER DEL MISMO TIPO DE DATO
!= NO ES IGUAL- DIFERENTE
!== ESTRICAMENTE DESIGUAL- DIFERENTE TIPO DE DATO
> MAYOR QUE  21 años- 22  o mas
>= MAYOR IGUAL QUE 18- 18 o mas
< MENOR QUE 7 - 6 o menos
<= MENOR IGUAL QUE 13 - 13 o menos
*/
/* Año- no se debe utilizar en programacion */
function year() {
    /* Pedimos el año */
    let yearIngreso = prompt("Ingrese un año!!");

    /* Si el año ingresado es DIFERENTE al esperado */
    if (yearIngreso != 2020) {
        alert("Se equivoco de epoca!!");
    } else {
        /* Si es 2020 */
        alert("Llegaste al año correcto");
    }
}


/* MAYOR DE EDAD */

function edad() {
    let edadIngreso = prompt("Ingrese su edad");

    /* Si es mayor de 18 años y menor de 80, creamo rango de edad */
    if (edadIngreso >= 18 && edadIngreso<=80) {
        alert("Eres mayor de edad puedes votar!!!")
        /* Si es menor de 17 */
    } else if (edadIngreso <= 17 && edadIngreso>=0) { /* Si anidado, puedo comprobar dos condiciones */
        alert("Usted es Menor de edad, no puede votar")
        /* Si es menor que 0 */
    } else if (edadIngreso <0){
        alert("Usted no ha nacido")

    }

}

/* OPERADORES LOGICOS
&& and ó y- un rango entre datos, dos o mas condiciones se cumplan
|| or ó ó
!NOT 
Expresiones regulares*/
/* paises= x */
function paises() {
     let pais= prompt("Ingrese su país!!").toLowerCase(); /* Convierte a minuscula */
    /* let minuscula= pais.toLowerCase(); */
     if (pais == "colombia" || pais== "ecuador" || pais=="peru") {
         alert("Este país habla español")
     } else{
         alert("Ahí no se habla español, que idioma se habla alla?")
     }
}

function ispaAmong() {
    let impostor= true; /* True- verdadero osea que si eres el impostor */

    /* Si el impostor NO es true/verdadero, osea es false....un tripulante mas */
    if (impostor == !true) {
        alert("Eres un tripulante")
    } else { /* Si es true entonces es un impostor */
        alert("Eres un impostor")
    }
}

