/* ejercicio 4:

Dada una cadena de texto, darle la vuelta e invertir el orden de sus caracteres, sin usar metodos propios del lenguaje, solo estructuras de control

*/

/* solucion */

const reverse =(str)=>{

    let reverseStr = ""
    for (const elementos of str) {
        for (let i = 0; i < elementos.length; i++) {
            reverseStr = elementos + reverseStr
        }
    }
    console.log(reverseStr);
}

reverse("hola")