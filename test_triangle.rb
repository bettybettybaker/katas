require "minitest/autorun"
require "./triangle.rb"

=begin
create more tests for each type of triangle. Work on being able to have an
instance of a class know what it is already when it is called. Classes are
blueprints and I need to tell them what kind they are
=end

class TestTriangle < Minitest::Test
  def test_greater_than_zero
    assert_equal true, Triangle.new(2,2,3).greater_than_zero
  end
end
