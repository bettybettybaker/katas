class Triangle
  attr_reader :sides
  def initialize(a, b, c)
    @sides = [a, b, c]
  end

  def valid?
    sides.reduce(:*) > 0
  end

  def type
    fail unless valid?

    if sides[0] == sides[1] && sides[1] == sides[2]
      return :equilateral
    end

  end

end
