"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var point_1 = require("./point");
var myPoint = new point_1.Point(23, 35);
console.log(myPoint);
// ---------------no functiona---------------------
console.log(myPoint.toString());
myPoint.setx(13);
myPoint.sety(144);
console.log(myPoint.getx());
console.log(myPoint.gety());