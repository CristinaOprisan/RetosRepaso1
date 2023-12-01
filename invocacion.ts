import { isEven } from './condicionales';
import { add } from './buclesFor';


// Reto de Invocación

// Guardar este reto en un nuevo fichero. Ej: invocacion.ts

// Invocando a la función isEven y a la función add creadas en los retos anteriores indicar si es
// par o impar la suma de los caracteres de cada uno de los siguientes arrays:

// • [“Casa”, “Coche”, “Ciudad”, “Cesta”]
// • [“Barco”, “Baca”, “Bicicleta”, “Balon”, “Bisiesto”, “Brasil”]
// • [“Venezuela”, “Veneno”, “Voltaje”]

// Para ello tendrás que exportar dichas funciones en los ficheros correspondientes.

// También tendrás que importar dichos ficheros en el fichero actual.

// Subir los cambios a GitHub. Y hacer merge con la rama principal.

function cristina(array:string[]) {
    let caracteres = add(array)
    isEven(caracteres)
}

// isEven(add(array))
cristina(['Casa', 'Coche', 'Ciudad', 'Cesta']);
cristina(['Barco', 'Baca', 'Bicicleta', 'Balon', 'Bisiesto', 'Brasil']);
cristina(['Venezuela', 'Veneno', 'Voltaje'])
