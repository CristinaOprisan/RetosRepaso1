import { Point } from './point';
import { Triangle } from './triangle';

let vertex1 = new Point(1, 2);
let vertex2 = new Point(3, 1);
let vertex3 = new Point(4, 5);

let myTriangle = new Triangle(vertex1, vertex2, vertex3);


let sidesLength = myTriangle.calculateLengthSides();
console.log(sidesLength);