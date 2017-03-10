require "minitest/autorun"
require "./triangle.rb"

class TestTriangle < Minitest::Test
  def test_greater_than_zero
    assert_equal true, Triangle.new.greater_than_zero
  end
end
