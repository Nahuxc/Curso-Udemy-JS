/* ejercicio 3 :
Dada una palabra, buscarla en una frase y devolver cuantas veces aparece en ella.
la frase y la palabra deben ser parametros de una funcion.

*/

/* solucion */

const searchText = (text, search)=>{
    /* metemos una expresion regular para poner los caracteres que queremos eliminar de forma global y indistinta sin importar si esta en mayuscula o minuscula */
    const str = text.toLowerCase().replace(/[-,._]/gi, "")
    /* contador de palabras */
    const counter = 0

    /* verificamos si el texto incluye la palabra que buscamos */
    if(str.includes(search)){

        /* creamos un array con el metodo split */
        const phrase = str.split(" ")
        /* creamos el contenedor de las palabras */
        const container = {}

        /* buscamos dentro del array de la frase los elementos */
        phrase.forEach(element => {
            /* en caso que exista la frase adentro del contenedor */
            if(container[element]){
                /* le va a sumar uno al valor que tengamos adentro del contenedor */
                container[element]++;
            }else{
                /* por defecto los demas valores van a quedar en 1 */
                container[element] = 1
            }
        });

        /* retornamos el resultado de la palabra buscada dentro del contenedor */
        const result = container[search]
        console.log(`se encontraron ${result}`);

    }else{
        console.log(`se encontraron: ${counter}`);
    }
}


searchText("hola", "hola")