"use strict";
// Retos de Condicionales
Object.defineProperty(exports, "__esModule", { value: true });
exports.isEven = void 0;
// 1. Trabajar en la rama repaso1 .En una carpeta nueva. Ej: retos1. Guarda estos retos en un
// fichero .js Ej: condicionales.ts
// 2. Realizar una función que dada una fecha de nacimiento te devuelva el signo zodiacal.
// La fecha de nacimiento vendrá indicada por dos números: dia y mes.
// La cabecera de la función tendrá el siguiente aspecto: function zodiac(day, month)
function zodiac(day, month) {
    if ((month == 3 && day >= 21) || (month == 4 && day <= 19)) {
        return "Aries";
    }
    else if ((month == 4 && day >= 20) || (month == 5 && day <= 20)) {
        return "Taurus";
    }
    else if ((month == 5 && day >= 21) || (month == 6 && day <= 20)) {
        return "Gemini";
    }
    else if ((month == 6 && day >= 21) || (month == 7 && day <= 22)) {
        return "Cancer";
    }
    else if ((month == 7 && day >= 23) || (month == 8 && day <= 22)) {
        return "Leo";
    }
    else if ((month == 8 && day >= 23) || (month == 9 && day <= 22)) {
        return "Virgo";
    }
    else if ((month == 9 && day >= 23) || (month == 10 && day <= 22)) {
        return "Libra";
    }
    else if ((month == 10 && day >= 23) || (month == 11 && day <= 21)) {
        return "Scorpio";
    }
    else if ((month == 11 && day >= 22) || (month == 12 && day <= 21)) {
        return "Sagittarius";
    }
    else if ((month == 12 && day >= 22) || (month == 1 && day <= 19)) {
        return "Capricorn";
    }
    else if ((month == 1 && day >= 20) || (month == 2 && day <= 18)) {
        return "Acuario";
    }
    else {
        return "Piscis";
    }
}
console.log(zodiac(29, 5));
// 3. Realizar un procedimiento que dado el nombre de un país te imprima en que continente
// estás. (Max 5 países por continente).
// La cabecera del procedimiento tendrá el siguiente aspecto: function continent(country)
function continent(country) {
    switch (country) {
        case 'Germany':
        case 'Italy':
        case 'Spain':
        case 'France':
        case 'Romania':
            console.log("".concat(country, " es un pais de Europe"));
            break;
        case 'India':
        case 'China':
        case 'Vietnam':
        case 'Turkey':
        case 'Mongolia':
            console.log("".concat(country, " es un pais de Asia"));
            break;
        case 'Fiji':
        case 'New Zealand':
        case 'Australia':
        case 'Samoa':
        case 'Palau':
            console.log("".concat(country, " es un pais de Australia"));
            break;
        case 'Nigeria':
        case 'Congo':
        case 'Egypt':
        case 'Algeria':
        case 'Marocco':
            console.log("".concat(country, " es un pais de Africa"));
            break;
        case 'United States':
        case 'Mexico':
        case 'Canada':
        case 'Cuba':
        case 'Panama':
            console.log("".concat(country, " es un pais de North America"));
            break;
        case 'Colombia':
        case 'Brazil':
        case 'Bolivia':
        case 'Paraguay':
        case 'Venezuela':
            console.log("".concat(country, " es un pais de South America"));
            break;
        case 'Argentina':
        case 'Russia':
        case 'Peru':
        case 'United Kigdon':
        case 'Chile':
            console.log("".concat(country, " es un pais de Antarctica"));
            break;
        default:
            console.log("No se encontro el continente");
    }
    // let europe = ['Germany', 'Italy', 'Spain', 'France', 'Romania'];
    // let asia = ['India', 'China', 'Vietnam', 'Turkey' ,'Mongolia'];
    // let australia = ['Fiji', 'New Zealand', 'Australia', 'Samoa', 'Palau'];
    // let africa = ['Nigeria', 'Congo', 'Egypt', 'Algeria', 'Marocco'];
    // let northAmerica = ['United States', 'Mexico', 'Canada', 'Cuba', 'Panama'];
    // let southAmerica = ['Colombia', 'Brazil', 'Bolivia', 'Paraguay', 'Venezuela'];
    // let antartic = ['Argentina', 'Russia', 'Peru', 'United Kigdon', 'Chile'];
    // if (europe.indexOf(country)){
    //     console.log('${country} es un pais de Europe');
    // } else if (asia.indexOf(country)){
    //     console.log('&{country} es un pais de Asia'); 
    // } else if (australia.indexOf(country)){
    //     console.log('&{country} es un pais de Australia');
    // } else if (africa.indexOf(country)){
    //     console.log('&{country} es un pais de Africa');
    // } else if (northAmerica.indexOf(country)){
    //     console.log('&{country} es un pais de North America');
    // }else if (southAmerica.indexOf(country)){
    //     console.log('&{country} es un pais de South America');
    // }else {
    //     console.log('&{country} es un pais de Antarctica');
    // }
}
continent('Russia');
// 4. Realizar una función que te imprima por consola el siguiente mensaje:
// - “El numero es par”, si el numero introducido como parámetro de entrada es par
// - “El numero es impar”, si el numero introducido como parámetro de entrada es impar
// La cabecera de la función tendrá el siguiente aspecto: function isEven(number)
function isEven(number) {
    if (number % 2 === 0) {
        console.log('El numero es par');
    }
    else {
        console.log('El numero es impar');
    }
}
exports.isEven = isEven;
isEven(7);
// 5. Subir los cambios a GitHub.
