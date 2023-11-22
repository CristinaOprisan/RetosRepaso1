"use strict";
// Reto 1: Clase Point con Typescript
// 1. Trabajar en la rama repaso2, crear una nueva carpeta denominada algebraProject y crear el
// fichero point.ts.
Object.defineProperty(exports, "__esModule", { value: true });
exports.Point = void 0;
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
    return Point;
}());
exports.Point = Point;
