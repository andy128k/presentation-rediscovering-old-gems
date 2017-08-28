function Rectangle(width, height) {
  this.width = width;
  this.height = height;
}

Rectangle.prototype.perimeter = function() {
  return this.width * this.height;
};

var rect = new Rectangle(1, 2);

console.log(rect.perimeter());
