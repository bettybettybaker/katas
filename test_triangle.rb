# https://github.com/sparkbox/apprenticeships/blob/overhaul/basic-programming/project-triangle-kata.md

require "minitest/autorun"
require "./triangle"

class TestTriangle < Minitest::Test

  def test_negative_triangle
    negative_triangle = Triangle.new(-1, 3, 4)
    assert_raises do
      negative_triangle.type
    end
  end

  def test_zero_length_side
    zero_length_side = Triangle.new(0, 1, 2)
    assert_raises do
      zero_length_side.type
    end
  end

  def test_sum_of_any_two_sides_greater_or_equal_to_the_third
    greater_or_equal = Triangle.new(1, 2, 99)
    assert_raises do
      greater_or_equal.type
    end
  end

  def test_equilateral
    equilateral = Triangle.new(1, 1, 1)
    assert_equal :equilateral, equilateral.type
  end

  def test_isosceles
    isosceles = Triangle.new(1, 3, 3)
    assert_equal :isosceles, isosceles.type
  end

  def test_scalene
    scalene = Triangle.new(1, 2, 3)
    assert_equal :scalene, scalene.type
  end

end
