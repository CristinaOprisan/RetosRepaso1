// Retos de Bucles For
// 1. Guardar estos retos en un nuevo fichero. Ej: buclesFor.ts
// 2. Realizar una función que imprima los números impares existentes hasta el número
// indicado como parámetro de entrada.
// La cabecera de la función tendrá el siguiente aspecto: function evenNumbers(num)
function evenNumbers(num) {
    for (let i = 1; i <= num; i += 2) {
        console.log(i);
    }
}
evenNumbers(11);
// 3. Realizar una función que como parámetro de entrada reciba un array y como salida
// devuelva el array revertido. No se puede utilizar el método revert de la clase array
// La cabecera de la función tendrá el siguiente aspecto: function myRevert(myArr)
function myRevert(myArr) {
}
// 4. Realizar una función que reciba como parámetro un array de strings que contenga
// nombres de colores y te imprima en cada caso si el color está en el arcoíris o no.
// La cabecera de la función tendrá el siguiente aspecto: function isRainbow(colors)
function isRainbow(colors) {
    const rainbowColors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
    for (let x = 0; x < colors.length; x++) {
        let color = colors[x];
        let lowerCaseColor = color.toLocaleLowerCase();
        let isRainbowColor = rainbowColors.includes(color);
        if (rainbowColors.includes(lowerCaseColor)) {
            console.log(`${color} está en el arcoíris.`);
        }
        else {
            console.log(`${color} no está en el arcoíris.`);
        }
    }
}
let colors = ['red', 'pink'];
console.log(isRainbow(colors));
// 5. Realizar una función que te devuelva la suma del numero de caracteres de las palabras
// almacenadas en un array.
// La cabecera de la función tendrá el siguiente aspecto: function add(myWords)
export function add(myWords) {
    let sumCharacters = 0;
    for (let y = 0; y < myWords.length; y++) {
        if (typeof myWords[y] === 'string') {
            sumCharacters += myWords[y].length;
        }
    }
    return sumCharacters;
}
let wordsArray = ['contar', 'caracteres'];
console.log(add(wordsArray));
// 6. Subir los cambios a GitHub.
