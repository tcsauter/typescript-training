import {Shape} from './Shape';
import {Circle} from './Circle';
import {Rectangle} from './Rectangle';

let myShape = new Shape(10, 15);
let myCircle = new Circle(5, 10, 20);
let myRectangle = new Rectangle(13, 25, 10, 8);

//declare an empty array of shapes
let theShapes: Shape[] = [];

//add shapes to the array
theShapes.push(myShape);
theShapes.push(myCircle);
theShapes.push(myRectangle);

for (let shape of theShapes) {
    console.log(shape.getInfo());
}