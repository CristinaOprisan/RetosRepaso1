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
        return '(${this.x},${this.y})';
      }
}