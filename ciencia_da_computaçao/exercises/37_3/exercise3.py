list_of_numbers1 = [100, 2, 3, 4, 5, 6, 700]
list_of_numbers2 = [1, 22, 43, 42, 15, 26, 7]


def greatest_number(list, index=0):
    number = list[index]

    if (index + 1) == len(list):
        return number

    if number < greatest_number(list, index + 1):
        number = greatest_number(list, index + 1)

    return number


print(greatest_number(list_of_numbers1))
