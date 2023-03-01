/* Escribe un programa que pida 3 números
 y escriba en la pantalla el mayor de los tres. */

 let a = parseInt(window.prompt("Ingrese el Primer Numero:"));
 let b = parseInt(window.prompt("Ingrese el Segundo Numero:"));
 let c = parseInt(window.prompt("Ingrese el Tercer Numero:"));
 let d;
 let mayor;

if (a > b) {
     d = a;
} else{
     d = b;
}

if (d > c) {
   mayor = d
} else{
   mayor = c    
}

document.write(mayor);