/* Ejercicio 2
Dada una cadena de texto, comprobar si es un palindromo o no.
los palindromos son palabras que se leen igual aun estando invertidas por ejemplo: ana, bob, otto, allivessevilla

-no tener en cuenta espacios o simbolos raros
*/


/* solucion */

const reverseString = (text)=>{
    /* primero convertimos el texto en un arreglo y separamos la palabra */
    const arrStr = text.split("")
    /* despues retornamos la palabra al reves usando el metodo reverse() */
    /* y con el metodo join() lo hacemos un texto */
    const reverseText = arrStr.reverse().join("")

    /* verificamos si el texto se lee igual de forma normal y inversa */
    text == reverseText ? console.log(`esta palabra ${text} es igual a esta otra ${reverseText} por lo tanto es un palindromo`) : console.log("no es un palindromo");

}


reverseString("otto")