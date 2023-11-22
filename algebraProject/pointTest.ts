import { Point } from './point';

let myPoint = new Point (23, 35)
const pointsArray: Point[] = [
    new Point(2, 4),
    new Point(-3, 3),
    new Point(5, -1),
  ];

console.log(myPoint);

// ---------------no functiona---------------------
console.log(myPoint.toString());

myPoint.setx(-13);
myPoint.sety(-2);
console.log(myPoint.getx());
console.log(myPoint.gety());

console.log(`Distancia al origen: ${myPoint.distanceToOrigin()}`);
const anotherPoint = new Point(0, 0);
console.log(`Distancia a otro punto: ${myPoint.calculateDistance(anotherPoint)}`);

console.log(`Cuadrante: ${myPoint.calcularQuadrant()}`);

let nearestPoint = myPoint.calculateNearest(pointsArray);
console.log(`Punto más cercano: ${nearestPoint.toString()}`);