/* Escribe un programa que pida dos números
 y escriba en la pantalla cual es el mayor. */
 let a = window.prompt("Ingrese el Primer  Numero:");
 parseInt(a);
 let b = window.prompt("Ingrese el Segundo  Numero:");
 parseInt(b);
 if (a > b) {
    document.write(a);
 } else {
    document.write(b);
 }