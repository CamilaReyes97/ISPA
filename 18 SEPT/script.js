/* Switch y arreglos con sus metodos */

/* Switch- Estructura de control- dependiendo del valor de una variable se va ejecutar una accion */

function prueba() {
    /* Prompt siempre almacena todo lo que ingresemos como texto */
    let opcion = prompt("Ingrese una opcion, 1. Redes Sociales 2.VideoJuegos 3.Clases")

    opcion = parseInt(opcion) /* Convierto la respuesta en numero entero, parseFloat decimal */

    switch (opcion) {
        case 1:
            /* Este boloque de codigo */
            alert("Bienvenido a nuestras redes sociales somos @Ispa");
            break;

        case 2:
            /* Este boloque de codigo */
            alert("Bienvenido a la seccion de VideoJuegos de ISPA")
            break;

        case 3:
            alert("Bienvenido a las clases!!!")
            break;

        default:
            alert("Esta no es una opcion, por favor ingresela nuevamente")
            break;
    }
}

function calculadora() {
    let operacion = prompt("Escoja una operacion matematica: Suma, Resta, Multiplicacion y Division").toLowerCase();

    switch (operacion) {
        case "suma":
            /* Pedimos los numero para hacer la operacion */
            let num1 = prompt("Ingrese el numero 1");
            let num2 = prompt("Ingrese el numero 2");

            num1 = parseFloat(num1)
            num2 = parseFloat(num2)
            /* Declaro la variable que almacena la operacion */
            let suma = num1 + num2

            alert("El resultado de la suma es: " + suma)

            break;

        default:
            break;
    }


}


/* ARREGLOS-ARRAYS- Son un tipo de variable que almacenan 1 o mas datos */

let numeros = [2, 5, 9, 0] /* Almacenar cualquier tipo de datos */
let texto = ["Pepito", "Pepita", "Maria"]
let mixtos = ["pollo", 1, true, 3.5, "yuca"]

/* Metodos y propiedades para usar los arreglos, posiciones empeizan desde 0 */
amigos = ["Jorge", "Woody", "Dori", "Gustav", "Camila", "Manuela"]
/* Tenemos 5 posiciones, pero tenemos 6 amigos */

/* La longitud de mi arreglo lo mido con el metodo length 
cantidad de elementos o amigos*/

document.write("<br> Usted tiene " + amigos.length + " amigos")

/* Me permite agregar mas elementos, en las ultimas posiciones */

amigos.push("Andres", "Eimy", "Pepita") /* Se agregan nuevas posiciones */
document.write("<br>" + amigos)

/* Splice- agregar elementos en una posicion especifica */
/* amigos.splice(1,1, "Pedro") */
amigos.splice(5, 2, "Ramon", "Gerardo")
document.write("<br>" + amigos)

/* Primer parametro: la posicion donde queremos insertar los nuevos datos
Segundo parametro: la cantidad de datos que queremos borrar a partir de la posicion incial
 Y luego los datos nuevos ha insertar*/


/* Delete- me permite eliminar cualquier posicion */

delete amigos[2]
document.write("<br>" + amigos)

/* Slice me permite tomar un rango de datos sin afectar el arreglo original, siempre se debe adicionar una posicion de mas */
let equipoIspa = amigos.slice(4, 8)
document.write("<br>" + equipoIspa)

/* Separa un elemento de otro */

document.write("<br>" + amigos.join("--"))

/* Me ordena alfabeticamente el arreglo */
document.write("<br>" + amigos.sort())


/* OBJETOS JSON- Son un tipo variable que permite representar un condigo de un objeto de la vida real, mostrando sus atributos mediante claves y valor */

let serieNetflix = {
    codigo: 123,
    nombre: "La casa de papel",
    genero: "Accion",
    estreno: new Date(2017, 05, 02),
    temporadas: {
        temporada1: 13,
        temporada2: 9,
        temporada3: 8,
        temporada4: 8,
        total: function () {
            /* Me retorne la suma de estas claves, usamis this para poder llamar cada clave */
            return this.temporada1 + this.temporada2 + this.temporada3 + this.temporada4
        }
    }
}

document.write("<br> Total de capitulos son: " + serieNetflix.temporadas.total())

let netflix = [
    {},
    {},
    {
        codigo: 123,
        nombre: "La casa de papel",
        genero: "Accion",
        estreno: new Date(2017, 05, 02),
        temporadas: {
            temporada1: 13,
            temporada2: 9,
            temporada3: 8,
            temporada4: 8,
            total: function () {
                /* Me retorne la suma de estas claves, usamis this para poder llamar cada clave */
                return this.temporada1 + this.temporada2 + this.temporada3 + this.temporada4
            }
        }
    },
    {
        codigo: 456,
        nombre: "The rain",
        genero: "Drama",
        estreno: new Date(2018, 05, 04),
        temporadas: {
            temporada1: 8,
            temporada2: 6,
            temporada3: 6,
            total: function () {
                /* Me retorne la suma de estas claves, usamis this para poder llamar cada clave */
                return this.temporada1 + this.temporada2 + this.temporada3 + this.temporada4
            }
        }
    }

]


/* CICLOS- Nos permite crear la ejecucion de un codigo varias veces */

console.log("Holaaa CHICOS!!");
console.log("Holaaa CHICOS!!");
console.log("Holaaa CHICOS!!");
console.log("Holaaa CHICOS!!");
console.log("Holaaa CHICOS!!");

function bienvenida() {
    /* While- mientras. Mientras la condicion se cumpla el codigo se va a repertir x cantidad de veces */

   /*  let contador = 0;

    while (contador < 100) {
        console.log("Holaaa CHICOS!!");
        contador++
    } */

    for (let contador = 0; contador < 150; contador++) {
        console.log("No me tengas miedo")
        
    }

}

let VideoJuegosFav=["Lol", "Minecraft", "Valorant", "Among Us", "Fall guys"];

document.write("<br>" + VideoJuegosFav[2])

/* 1 + 1 + 1 */
for (let i = 0; i < VideoJuegosFav.length; i++) {
    document.write("<br>" + VideoJuegosFav[i])  
}

/* Crear un arreglo de sus canciones favoritas y me las van imprimir pantalla con for, minimo 3 */
