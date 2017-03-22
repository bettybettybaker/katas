require "minitest/autorun"
require "./roman"

class TestTruth < Minitest::Test
  def test_roman_numeral_one
    assert_equal "I", RomanToNum.convert(1)
  end

  def test_roman_numeral_three
    assert_equal "III", RomanToNum.convert(3)
  end
end
