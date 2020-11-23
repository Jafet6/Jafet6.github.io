import math


metros_quadrados = 60


def ink_calculator(room_size):
    ink_liters = room_size / 3
    ink_galons = math.ceil(ink_liters / 18)
    final_price = ink_galons * 80
    return (ink_galons, final_price)


print(ink_calculator(metros_quadrados))
