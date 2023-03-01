/* Escribe un programa que pida un número y diga si es divisible por 2
 */

let a = parseInt(window.prompt("Ingrese un numero"));
if (a%2 == 0) {
    document.write(a + " Si es divisible en 2");
} else{
    document.write(a + " No es  divisible en 2");
}
