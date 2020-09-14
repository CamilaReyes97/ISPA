/* Imprime o saca una ventana de alerta con un mensaje */
/* alert("Hola mundoooo!!!"); */
/* Imprimir en pantalla, dentro de la pagina web - ALT + SHIF + A */
document.write("<h1>Hola chicos Bienvenidos!! </h1>");
/* Imprime en la consola, tu mejor amigo para los errores */
console.log("Hola, soy tu mejor amigo!!! Parcero del alma!!");

/* VARIABLES- es un espacio en memoria del computador donde puedo almacenar un dato*/

/* Tipos de datos */

var texto = "Soy un texto"; /* El texto va dentro de comillas- String */
var numero = 1234; /* Almacenar numeros- number */  
var decimal= 3.7;

var boleanos= true; /* False, verdadero o falso  */
var enLinea= true;  /* Esta conectado- circulo en facebook */

/* Arreglos- Es una variable que guarda un conjunto de datos, de cualquier tipo */
var array= ["Maria", 2, false, "Pepito"];
/* Objeto- es un conjunto de caracteristicas o valores de un objeto real llevado a la programacion */
var objeto= {
    animal: "perro",
    raza: "mastin tibetano",
    nombre: "Copito sucio",
    edad: 2.5,
    vacunas: ["rabia", "moquillo", "cancha"]
}

/* TIPOS DE VARIABLES VAR, LET, CONST */

/* 2014- VAR : Me permite modificar o actualizar la variable*/

var nombre2014="Maria Perez";
/* Se caso y se cambio el nombre */
nombre2014= "Maria de Rodriguez";
document.write(nombre2014)

/* 2015 Let: Te permite modificar el valor, pero hasta cierto alcance. Se limita a un bloque de codigo */

let nombre2015= "Pepito Lopez";

nombre2015="Pepito Perez";
document.write("<br>" + nombre2015);

/* Const- constante: se almacenan valores que NO se modifican. */

const cedula= 1110432156;

/* cedula= 1114567456; */
document.write("<br>" + cedula)


/* Operadores Aritmeticos- suma, resta, multiplicacion y division */

let num1= 5;
let num2= 7;

/* El simbolo + sirve para sumar dos o mas numeros.Pero tambien sirve para juntar un texto, etiqueta con un variable, se imprima el mensaje como una sola linea */
let suma= num1 + num2; /* 12 */
document.write("<br> El resultado de la suma es: " + suma) /* Los junta como un solo texto */

let resta= num1 - num2;
document.write(" <br>El resultado de la resta es: " + resta);

let multiplicacion= num1 * num2;
document.write(" <br>El resultado de la multiplicacion es: " + multiplicacion)

let division=  num1/num2;
document.write(" <br>El resultado de la division es: " + division);


/* prompt : este metodo me permite solicitarle al usuario un dato, le vamos a pedir un numero */
/* Pedimos los numeros */
let numero1= prompt("Q'hubo ingrese un numero!!"); /* "5" */
let numero2= prompt("Q'hubo ingrese otro numero!!"); /* "3" */

/* La funcion parseFloat me permite convertir un texto a numero decimal y entero.
parseInt me permite convertir un texto a numero entero */
numero1= parseFloat(numero1); /* 5 */
numero2= parseFloat(numero2); /* 3 */

/* Hacemos la operacion */
let operacion= numero1 + numero2;

/* Imprimimos el resultado en una alerta */
alert("El resultado de la suma es: " + operacion)















