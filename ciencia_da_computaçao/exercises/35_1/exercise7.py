number_list = [5, 9, 3, 19, 70, 8, 100, 2, 1, 27]


def lower_number(list):
    lower_number = number_list[0]
    for i in range(len(list)):
        if list[i - 1] < list[i]:
            lower_number = list[i - 1]
    return lower_number


print(lower_number(number_list))
