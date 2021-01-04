def even_count_recursively(numbers):
    count = 0

    if numbers == 0:
        return count

    if numbers % 2 == 0:
        count += 1

    return count + even_count_recursively(numbers - 1)


print(even_count_recursively(7))
