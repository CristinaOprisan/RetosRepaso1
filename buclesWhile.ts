// Retos de Bucles While

// 1. Guardar estos retos en un nuevo fichero. Ej: buclesWhile.ts

// 2. Realizar una función que te devuelva si existe un numero par en el array de números que
// introduces como parámetro de entrada.
// La cabecera de la función tendrá el siguiente aspecto: function hasEven(myNums)

export function hasEven(myNums: number[]){
    let i = 0;
    while (i <= myNums.length){
        if (myNums[i] % 2 === 0) {
            return true
        }
        i++
    }
    return false
}

let numsArray = [7, 60, 44, 31]
console.log(hasEven(numsArray));




// 3. Realizar una función que reciba un array de nombres y te devuelva verdadero si y solo si
// todos los nombres empiezan por M.
// La cabecera de la función tendrá el siguiente aspecto: function startWithM(myNames)

function startWithM(myNames: string[]){
    let i = 0;
    while (i <= myNames.length) {
        if (myNames[i] && myNames[i][0].toLocaleLowerCase() !== 'm') {
            return false
        }
        i++
    }
    return true
}

let namesArray = ['Marlen', 'Maria', 'Mario']
console.log(startWithM(namesArray));




// 4. Subir los cambios a GitHub.