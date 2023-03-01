/* Añadir al ejercicio anterior 
que nos diga por cuál de los cuatro es divisible 
(hay que decir todos por los que es divisible) */

let a = parseInt(window.prompt("Ingrese un numero"));

if (a%2 == 0) {
    document.write(a + " Si es divisible en 2 <br>");
} else {
    document.write(a + " No es divisible en 2 <br>");
} 

if (a%3 == 0) {
    document.write(a + " Si es divisible en 3 <br>");
} else {
    document.write(a + " No es divisible en 3 <br>");
} 

if (a%5 == 0) {
    document.write(a + " Si es divisible en 5 <br>");
} else {
    document.write(a + " No es divisible en 5 <br>");
} 

if (a%7 == 0) {
    document.write(a + " Si es divisible en 7 <br>");
} else {
    document.write(a + " No es divisible en 7 <br>");
} 

