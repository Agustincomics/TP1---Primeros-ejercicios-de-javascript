/* Escribe un programa que pida una frase
y escriba las vocales que aparecen
Nota: Tener en cuenta la función length y substring o charAt (developer mozilla)
 */
let frase = window.prompt("Ingrese la Frase");
let i;
let letra;
document.write(frase + "<br>");
for (i = 0; i < frase.length; i++) {
    letra =  frase.charAt(i);
    if (letra == "a" || letra == "e" || letra == "i" || letra == "o" || letra == "u") {
        document.write(letra);
    }
}