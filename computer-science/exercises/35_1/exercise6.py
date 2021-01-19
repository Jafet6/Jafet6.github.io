side_one = 3
side_two = 4
side_three = 5


def triangle_sides(side1, side2, side3):
    if (
        side1 + side2 > side3
        and side1 + side3 > side2
        and side2 + side3 > side1
    ):
        if side1 == side2 == side3:
            return "Equilateral triangle"
        if side1 == side2 or side1 == side3 or side2 == side3:
            return "Isósceles Triangle"
        if side1 != side2 != side3:
            return "Scalene Triangle"

    return "It is not a triangle"


print(triangle_sides(side_one, side_two, side_three))
