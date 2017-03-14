# https://github.com/sparkbox/apprenticeships/blob/overhaul/basic-programming/project-triangle-kata.md

class Triangle
  attr_reader :sides
  def initialize(a, b, c)
    @sides = [a, b, c]
  end

  # Raise an error if a combination of sides cannot create a triangle.
  def valid?

# All sides are greater than zero.
    sides.reduce(:*) > 0

# The sum of any two sides must be greater than or equal to the third.
    sides[0] + sides[1] >= sides[2] && sides[1] + sides[2] >= sides[0] && sides[0] + sides[2] >= sides[1]
  end

  def type
    fail unless valid?

# Return equilateral if all sides are of equal length.
    if sides[0] == sides[1] && sides[1] == sides[2]
      return :equilateral

# Return isosceles if two sides are of equal length.
    elsif sides[0] == sides[1] || sides[1] == sides[2] || sides[2] == sides[0]
      return :isosceles

# Return scalene if no sides are of equal length.
    else sides[0] != sides[1] && sides[1] != sides[2] && sides[2] != sides[0]
      return :scalene
    end

  end

end
