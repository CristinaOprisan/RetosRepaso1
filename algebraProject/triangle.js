"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Triangle = void 0;
// Reto 5: Clase Triangle con Typescript
// 1. Dentro de la carpeta actual crear el fichero triangle.ts. Importar en dicho fichero la clase Point.
// 2. Dicho fichero debe contener la clase Triangle con los siguientes atributos privados:
// • vertex1: Point
// • vertex2: Point
// • vertex3: Point
// Que corresponden a los vértices de un triángulo.
// 3. El constructor de la clase debe tener los mismos parámetros de entrada que atributos.
// 4. Programa el método calculateLengthSides() : number[] que debe devolver un array de tres posiciones,
// cada una de las cuales debe ser la longitud de uno de los lados del triángulo.
// NOTA: Para ello es importante usar el método calculateDistance de la clase Point.
// 5. En otro fichero denominado triangleTest.ts importar la clase Triangle.
// 6. Crear un nuevo objeto myTriangle de la clase Triangle, en el fichero anterior, y probar todos sus
// métodos. Subir los cambios a GitHub. Haced merge con la rama main.tsc 
var Triangle = /** @class */ (function () {
    function Triangle(vertex1, vertex2, vertex3) {
        this.vertex1 = vertex1;
        this.vertex2 = vertex2;
        this.vertex3 = vertex3;
    }
    Triangle.prototype.calculateLengthSides = function () {
        var side1 = this.vertex1.calculateDistance(this.vertex2);
        var side2 = this.vertex2.calculateDistance(this.vertex3);
        var side3 = this.vertex3.calculateDistance(this.vertex1);
        return [side1, side2, side3];
    };
    return Triangle;
}());
exports.Triangle = Triangle;
