class Rectangle
  constructor: (width, height) ->
    @width = width
    @height = height

  perimeter: ->
    @width * @height

rect = new Rectangle(1, 2)
console.log rect.perimeter()
