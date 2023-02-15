/* Ejercicio 8:
Dado un Numero entero, inviertelo y devuelve denuevo el numero entero

Ejemplo:

invertirNumero(67)  //devuelve: 76

*/

/* solucion */

const reverseNumber = (num)=>{

    let stringNum = num.toString()
    let spaceStringNum = ""

    for (const number of stringNum) {
        for (let i = 0; i < number.length; i++) {
            spaceStringNum = number + spaceStringNum
        }
    }

    /* el math.sign nos dice el simbolo que tenga el numero */
    let reverseNum = parseInt(spaceStringNum) * Math.sign(num)

    console.log(reverseNum);

}

reverseNumber(67)