"use strict";
// Reto 1: Clase Point con Typescript
Object.defineProperty(exports, "__esModule", { value: true });
exports.Point = void 0;
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
var Point = /** @class */ (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    Point.prototype.setx = function (x) {
        this.x = x;
    };
    Point.prototype.sety = function (y) {
        this.y = y;
    };
    Point.prototype.getx = function () {
        return this.x;
    };
    Point.prototype.gety = function () {
        return this.y;
    };
    Point.prototype.toString = function () {
        return "".concat(this.x, ",").concat(this.y, ")");
    };
    Point.prototype.distanceToOrigin = function () {
        return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
    };
    Point.prototype.calculateDistance = function (anotherPoint) {
        var dx = anotherPoint.getx() - this.x;
        var dy = anotherPoint.gety() - this.y;
        return Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2));
    };
    Point.prototype.calcularQuadrant = function () {
        if (this.x === 0 || this.y === 0) {
            return 0;
        }
        else if (this.x > 0 && this.y > 0) {
            return 1;
        }
        else if (this.x < 0 && this.y > 0) {
            return 2;
        }
        else if (this.x < 0 && this.y < 0) {
            return 3;
        }
        else if (this.x > 0 && this.y < 0) {
            return 4;
        }
        return -1;
    };
    Point.prototype.calculateNearest = function (points) {
        var nearestPoint = points[0];
        var minDistance = this.calculateDistance(nearestPoint);
        for (var i = 1; i < points.length; i++) {
            var currentDistance = this.calculateDistance(points[i]);
            if (currentDistance < minDistance) {
                minDistance = currentDistance;
                nearestPoint = points[i];
            }
        }
        return nearestPoint;
    };
    return Point;
}());
exports.Point = Point;
