/* ejercicio 7:

dados dos numeros, devolver cuantos numeros impares hay entre ellos */

/* solucion */

const numbers = (startNumber, endNumber)=>{

    let contador = 0

    for (let i = startNumber; i <= endNumber; i += 2) {
        if(startNumber != 0){
            console.log(`estos numeros son impares ${i} `);
            contador++
        }else{
            console.log(`estos numeros son pares ${i} `);
            contador++
        }
    }
    console.log(`esta es la cantidad de numeros impares ${contador}`);

}

numbers(1, 100)
