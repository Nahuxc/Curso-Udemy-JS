/* ejercicio 1: dado un numero devolver su tabla de multiplicar completa */

/* solucion 1 */

/* const multiplicacionTable= (num)=>{
    const resolve = [num * 1,
        num * 2,
        num * 3,
        num * 4,
        num * 5,
        num * 6,
        num * 7,
        num * 8,
        num * 9,
        num * 10]
        resolve.map((res)=> console.log(`este es tu resultado de ${res}`));
}

multiplicacionTable(2) */

/* solucion 2 */

const multiplicacionTable = (num)=>{
    let tabla = `tabla del ${num}`
    console.log(tabla);
    for (let i = 1; i <= 10; i++) {
        const mult = i * num
        console.log(`${i} x ${num} = ${mult} `);
    }
}

multiplicacionTable(8)