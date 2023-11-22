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

// Reto 3: Método Calcular Cuadrante

// 1. Programa un método denominado calcularQuadrant():number que devuelva el
// cuadrante en el que se encuentra el punto.
// El prototipo del método se muestra a continuación:
// - Devuelve 0 si x o y son 0.
// - Devuelve 1 si está en el primer cuadrante (x e y positivos).
// - Devuelve 2 si está en el segundo cuadrante (x negativo e y positivo).
// - Devuelve 3 si está en el tercer cuadrante (x e y negativos).
// - Devuelve 4 si está en el cuarto cuadrante (x positivo e y negativo).
// 2. Modificar el fichero pointTest.ts para probar este nuevo método.
// 3. Subir los cambios a GitHub.

// Reto 4: Calcular el Punto Más Cercano

// 1. Programa un método denominado calculateNearest(points : Point[]) : Point, que reciba
// como parámetro un array de objetos de la clase Point y devuelva una referencia al objeto
// de dicho array que esté más cercano al punto actual.
// NOTA: Utilizar para ello el método calculateDistance implementado en el reto3.
// 2. Modificar el fichero pointTest.ts para probar este nuevo método.
// 3. Subir los cambios a GitHub.


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

    calcularQuadrant(): number {
        if (this.x === 0 || this.y === 0) {
          return 0;
        } else if (this.x > 0 && this.y > 0) {
          return 1;
        } else if (this.x < 0 && this.y > 0) {
          return 2;
        } else if (this.x < 0 && this.y < 0) {
          return 3;
        } else if (this.x > 0 && this.y < 0) {
          return 4;
        }
        return -1;
    }

    calculateNearest(points: Point[]): Point {
        let nearestPoint = points[0];
        let minDistance = this.calculateDistance(nearestPoint);
    
        for (let i = 1; i < points.length; i++) {
          let currentDistance = this.calculateDistance(points[i]);
          if (currentDistance < minDistance) {
            minDistance = currentDistance;
            nearestPoint = points[i];
          }
        }
    
        return nearestPoint;
    }
}