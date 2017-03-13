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
  end
end
