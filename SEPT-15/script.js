/* Condicionales- Es un grupo de intrucciones que se pueden ejecutar o no dependiendo de si se cumple una condicion */

/* Creamos una funcion llamada color */
function color() {
    /* Pedimos el color y lo almacenamos en una variable */
    let colorUsuario= prompt("Ingrese un color en INGLES");
    let colorEsperado= "red"; 

    /* Convertimos el color ingresado en minuscula para poder compararlos */
    let minuscula= colorUsuario.toLowerCase();
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
== IGUALES*/