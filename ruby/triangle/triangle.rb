# https://github.com/sparkbox/apprenticeships/blob/overhaul/basic-programming/project-triangle-kata.md

class Triangle
  attr_reader :sides
  def initialize(a, b, c)
    @sides = [a, b, c]
  end

  def validate
    has_three_sides
    three_sides_make_triangle
  end

  def type
    validate
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

  private

  def has_three_sides
    unless sides.reduce(:*) > 0
      fail
    end
  end

  def three_sides_make_triangle
    unless sides[0] + sides[1] >= sides[2] && sides[1] + sides[2] >= sides[0] && sides[0] + sides[2] >= sides[1]
      fail
    end
  end

end


# equilateral = Triangle.new(4, 4, 4).has_three_sides?
# isosceles = Triangle.new(1, 3, 3).has_three_sides?
# scalene = Triangle.new(1, 2, 3).has_three_sides?
# two_sides = Triangle.new(1, 0, 3).has_three_sides?
# neg_number = Triangle.new(-1, 2, 3).has_three_sides?
# one_side_too_big = Triangle.new(1, 2, 99).has_three_sides?
