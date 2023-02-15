/* ejercicio 5:

cuanto es el x porciento de x numero

*/

/* solucion: */

const percentage = (num, percentage)=>{
   const result =  num * percentage / 100
   return console.log(`el porcentaje es: ${result}`);
}

percentage(2200, 15);