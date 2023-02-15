/* ejercicio 9:

dados dos arrays, devolver un array con solo los elementos comunes de ambos

*/


/* solucion */

const list1 = [1,2,3,4,7]
const list2 = [2,4,5,6,7]

const elementComun = (arr1, arr2)=>{
    const filterArr = arr1.filter(nums => arr2.includes(nums))
    console.log(filterArr);
}

elementComun(list1, list2)