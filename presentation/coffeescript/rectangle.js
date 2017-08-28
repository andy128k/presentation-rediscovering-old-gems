function extend(child, parent) {
  /* 300 characters of boilerplate is skipped */
}

function Shape() {}

function Rectangle(width, height) {
  this.width = width;
  this.height = height;
}

extend(Rectangle, Shape);

Rectangle.prototype.perimeter = function() {
  return 2 * (this.width + this.height);
};

var rect = new Rectangle(1, 2);

console.log(rect.perimeter());
