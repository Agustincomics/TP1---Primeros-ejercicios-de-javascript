/* Escribe un programa que pida un número
 y nos diga si es divisible por 2, 3, 5 o 7
(sólo hay que comprobar si lo es por uno de los cuatro) */

let a = parseInt(window.prompt("Ingrese un numero"));

if (a%2 == 0 || a%3 == 0 || a%5 == 0 || a%7 == 0) {
    document.write(a + " Si es divisible");
} else {
    document.write(a + " No es divisible");
}