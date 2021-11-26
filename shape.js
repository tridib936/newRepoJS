const Circle = require('./circle');
class Shape {
    constructor() {
      this.color = "red";
    }
    drawShape() {
      console.log("drawing shape");
    }
    calculateArea() {
      console.log("calculating area");
    }
}
export default Shape;