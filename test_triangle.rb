require "minitest/autorun"
require "./triangle"

=begin
create more tests for each type of triangle. Work on being able to have an
instance of a class know what it is already when it is called. Classes are
blueprints and I need to tell them what kind they are
=end

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

  def test_equilateral
    equilateral = Triangle.new(1, 1, 1)
    assert_equal :equilateral, equilateral.type
  end

  def test_isosceles
    isosceles = Triangle.new(1, 3, 3)
    assert_equal :isosceles, isosceles.type
  end

end

#  def test_does_triangle_exist
#    assert_equal true, Triangle.new(2,2,3).greater_than_zero
#  end
