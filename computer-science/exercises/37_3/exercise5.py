def prime_number(number, divisor=2):
    if number % divisor == 0 and number != divisor:
        return "Is not prime"
    if number == divisor:
        return "Is prime"

    return prime_number(number, divisor + 1)


print(prime_number(997))
