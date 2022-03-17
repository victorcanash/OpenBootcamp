class Figure {
    #color;
    constructor(color) {
        this.#color = color;
    }
    get Color() {
        return this.#color;
    }
    set Color(color) {
        this.#color = color;
    }
    calculateArea() {
        return -1;
    }
}

class Circle extends Figure {
    radius;
    constructor(color, radius) {
        super(color);
        this.radius = radius;
    }
    calculateArea() {
        // Round with two decimals
        return Math.round((3.14 * (this.radius * 2)) * 100) / 100;
    }
}

class Rectangle extends Figure {
    width;
    height;
    constructor(color, width, height) {
        super(color);
        this.width = width;
        this.height = height;
    }
    calculateArea() {
        return this.width * this.height;
    }
}

const circle = new Circle("red", 5);
console.log(`The circle area with a radius of 5 is ${circle.calculateArea()}`);
const rectangle = new Rectangle("blue", 5, 10);
console.log(`The rectangle area with a size of 5x10 is ${rectangle.calculateArea()}`);