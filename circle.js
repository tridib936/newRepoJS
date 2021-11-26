class Circle extends Shape {
    constructor(x, y, r) {
        super(x, y);
        this.r = r;
    }
    calculateArea() {
        return Math.PI * this.r * this.r;
    }
}