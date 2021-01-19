def binary_search(array, value):
    low_index = 0
    high_index = len(array)
    while low_index < high_index:
        middle_index = (low_index + high_index) // 2

        if array[middle_index] == value:
            return middle_index

        elif array[middle_index] < value:
            low_index = middle_index + 1

        else:
            high_index = middle_index - 1

    raise ValueError(f"{value} is not in list")


array = [2, 3, 4, 10, 40]
target = 80

print(binary_search(array, target))
