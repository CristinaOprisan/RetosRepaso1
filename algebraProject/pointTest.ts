import { Point } from './point';

let myPoint = new Point (23, 35)

console.log(myPoint);

// ---------------no functiona---------------------
console.log(myPoint.toString());

myPoint.setx(13);
myPoint.sety(144);
console.log(myPoint.getx());
console.log(myPoint.gety());

console.log(`Distancia al origen: ${myPoint.distanceToOrigin()}`);
const anotherPoint = new Point(0, 0);
console.log(`Distancia a otro punto: ${myPoint.calculateDistance(anotherPoint)}`);

console.log(`Cuadrante: ${myPoint.calcularQuadrant()}`);