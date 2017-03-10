require "minitest/autorun"
require "./triangle.rb"

class TestTriangle < Minitest::Test
  def test_all_sides_greater_than_zero
    assert_equal true, Triangle
  end
end
