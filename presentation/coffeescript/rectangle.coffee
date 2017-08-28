class Shape

class Rectangle extends Shape
  constructor: (width, height) ->
    @width = width
    @height = height

  perimeter: ->
    2 * (@width + @height)

rect = new Rectangle(1, 2)
console.log rect.perimeter()
