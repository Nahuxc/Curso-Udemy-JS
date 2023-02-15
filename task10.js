/* Ejercicio 10:

Dado un numero, mostrar una escalera con escales de "[-]" usamdo el numero para los niveles de la escalera

*/

/* solucion 1*/
console.log("SOLUCION 1");

const ladder = (quantityLadder)=>{

    let ladderStr = ""

    for (let i = 1; i <= quantityLadder; i++) {
        ladderStr += "[-]"
        const createLadder = ladderStr
        console.log(createLadder);
    }
}

ladder(5)

/* solucion 2*/

console.log("SOLUCION 2 / Otro tipo de escalera");

const stairs = (quantityStairs)=>{
    let stairsStr = "-"
    const content = []

    for (let i = 1; i <= quantityStairs; i++) {
        content.push(stairsStr)
        console.log(content);
    }
}

stairs(5)