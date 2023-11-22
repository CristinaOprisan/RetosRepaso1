// Reto 1: Clase Point con Typescript
// 1. Trabajar en la rama repaso2, crear una nueva carpeta denominada algebraProject y crear el
// fichero point.ts.

// 2. Dicho fichero debe contener la clase Point con los siguientes atributos privados:

// • x: number
// • y: number

// 3. El constructor de la clase debe tener los mismos parámetros de entrada que atributos.

// 4. Crear los métodos setters y getters para todos los atributos de la clase.

// 5. Crear un método toString() que convierta a texto las coordenadas del punto.
// Debe devolver: “(x,y)”

// 6. En otro fichero denominado pointTest.ts importar la clase Point.

// 7. Crear un nuevo objeto myPoint de la clase Point, en el fichero pointTest.ts, y probar todos sus
// métodos. Subir los cambios a GitHub.

// Reto 2: Métodos de Distancias

// 1. Crear un método denominado distanceTolOrigin():number que devuelva la distancia del
// punto al origen de coordenadas (0,0).
// NOTA: Buscar en Google la formula para calcular la distancia.

// 2. Crear un método denominado calculateDistance(anotherPoint:Point):number, que
// devuelva la distancia entre el punto representado por la instancia actual del objeto y otra
// instancia de Punto que se recibe como parámetro denominada anotherPoint.
// NOTA: Buscar en Google la formula para calcular la distancia entre dos puntos.

// 3. Modificar el fichero pointTest.ts para probar los nuevos métodos

// 4. Subir los cambios a GitHub.

export class Point {
    private x: number;
    private y: number;

    constructor (x: number, y: number){
        this.x = x;
        this.y = y;
    }

    setx(x: number){
        this.x = x
    }

    sety(y: number){
        this.y = y
    }

    getx(): number{
        return this.x
        
    }

    gety(): number{
        return this.y
        
    }

    toString(): string {
        return `${this.x},${this.y})`;
    }

    distanceToOrigin(): number {
        return Math.sqrt(this.x ** 2 + this.y ** 2);
    }

    calculateDistance(anotherPoint: Point): number {
        let dx = anotherPoint.getx() - this.x;
        let dy = anotherPoint.gety() - this.y;
        return Math.sqrt(dx ** 2 + dy ** 2);
    }
}

