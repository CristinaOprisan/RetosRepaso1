"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var point_1 = require("./point");
var myPoint = new point_1.Point(23, 35);
var pointsArray = [
    new point_1.Point(2, 4),
    new point_1.Point(-3, 3),
    new point_1.Point(5, -1),
];
console.log(myPoint);
// ---------------no functiona---------------------
console.log(myPoint.toString());
myPoint.setx(-13);
myPoint.sety(-2);
console.log(myPoint.getx());
console.log(myPoint.gety());
console.log("Distancia al origen: ".concat(myPoint.distanceToOrigin()));
var anotherPoint = new point_1.Point(0, 0);
console.log("Distancia a otro punto: ".concat(myPoint.calculateDistance(anotherPoint)));
console.log("Cuadrante: ".concat(myPoint.calcularQuadrant()));
var nearestPoint = myPoint.calculateNearest(pointsArray);
console.log("Punto m\u00E1s cercano: ".concat(nearestPoint.toString()));
