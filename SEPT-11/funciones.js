/* Operadores de asignacion 

=*/

let numero = 2; /* Asigna un valor */

/* numero= numero + 5 */


/* Actualizas el valor de la variable con una nueva asignacion */
console.log(numero += 5) /*+= A la variable le suma 5 (7)*/
console.log(numero -= 3) /*-= Le resta a la variable 3 ---(4) */
console.log(numero *= 3) /* *= le multiplica un valor a la varible 3 ----(12) */
console.log(numero /= 4) /* /= dividimos la variable en 4 ------------(3) */

/*Los operadores de asignacion me permite Actualizar la informacion de las variables  */
let nombre = "Pepita"

nombre += " Lopez" /* Aqui le agrega el apellido al nombre y se veria asi: Pepita Lopez */
/* nombre= nombre + " Lopez" */

console.log(nombre) /* Pepita Lopez */

/* Operadores de Incremento y decremento */

let year = 2020;

year++; /*Actualiza la variable y Le suma una unidad 1. Bucles o ciclos, contadores*/
console.log("El año es: " + year)

year--; /* Actualiza la variable y le resta unidad 1, crear cuentas regresivas */
console.log("El año es: " + year)


/* FUNCIONES: Una funcion un bloque de codigo que solo se ejecutar cuando yo lo llame */

function saludoEstudiantes() {
    alert("Holaaaaaaaaaaaaaaaaaaa!!!!")
}

/* Var entra a todo lado y cambia su valor */
function pruebaVar() {
    var num1 = 13;

    if (true) {
        var num1= 8;
    }

console.log(num1)
}
/* Let es educado y no entra a los bloques de codigo sin permiso y no modifica su valor */
function pruebaLet() {
    let num2= 4;

        if (true) {
                let num2=30;
             }
    console.log(num2)
}

