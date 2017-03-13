require "minitest/autorun"
require "./triangle"

=begin
create more tests for each type of triangle. Work on being able to have an
instance of a class know what it is already when it is called. Classes are
blueprints and I need to tell them what kind they are
=end

class TestTriangle < Minitest::Test
  def test_triangle
    valid_triangle = Triangle.new(2, 3, 4)
    assert valid_triangle.valid?
  end
end

#  def test_does_triangle_exist
#    assert_equal true, Triangle.new(2,2,3).greater_than_zero
#  end
