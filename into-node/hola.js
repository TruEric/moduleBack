/**
Ejercicio
Crear un scipt que nos diga si una letra esta repetida en un arreglo 
y cuantes veces se repite la que se repite mas veces
*/
const numeros = [ 'a', 'b', 'c', 'e', 'b', 'd', 'b', 'z' ]
// si al menos una letra se repite = true o false 
// la letra que mas se repite es b y aparece 3 veces

const repeated = () =>{
    numeros.forEach(element => {
        element == element ? console.log('true') : console.log('false')
    });
}

repeated()