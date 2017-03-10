# https://github.com/sparkbox/apprenticeships/blob/overhaul/basic-programming/project-triangle-kata.md

=begin

# Fist attempt (did not use TDD)

def triangle(a, b, c)
  if ((a == b) && (a == c) && (b == c))
    puts "equilateral"
  elsif ((a == b) || (a == c) || (b == c))
    puts "isosceles"
  else
    puts "scalene"
  end
end

a = 1
b = 2
c = 3

=end

# Second attempt using TDD

class Triangle
  def greater_than_zero(side1, side2, side3)
    if side1 * side2 * side3 = 0
      return true
    end
  end

  def sides
    {
      side1: 2
      side2: 2
      side3: 3
    }
  end
end
