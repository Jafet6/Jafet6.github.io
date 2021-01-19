number = 10


def fizz_buzz(numb):
    fizz_buzz_list = []
    for i in range(numb):
        if i % 3 == 0 and i % 5 == 0:
            fizz_buzz_list.append("FizzBuzz")
        elif i % 3 == 0:
            fizz_buzz_list.append("Fizz")
        elif i % 5 == 0:
            fizz_buzz_list.append("Buzz")
        else:
            fizz_buzz_list.append(i)
    return fizz_buzz_list


print(fizz_buzz(number))
