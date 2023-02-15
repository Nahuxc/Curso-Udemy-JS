/* ejercicio 6 :
Dibujar un cuadrado hueco con asteriscos

*/

/* solucion */

const leftRight = (quantity)=>{
    let str = ""
    for (let i = 0; i < (quantity - 2); i++) {
        str = "*"
        for (let y = 0; y < (quantity - 2); y++) {
            str += " "
        }
        str += "*"
    }
    console.log(str);
}


const topBottom = (quantity)=>{
    let str = ""
    for (let i = 0; i < quantity; i++) {
        str += "*"
    }
    console.log(str);
}


topBottom(4)
leftRight(4)
topBottom(4)


