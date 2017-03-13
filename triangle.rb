class Triangle
  attr_reader :sides
  def initialize(a, b, c)
    @sides = [a, b, c]
  end

  def valid?
    sides[0] * sides[1] * sides[2] != 0
  end
end
