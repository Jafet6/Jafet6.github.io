def even_count(numbers):
    count = 0

    for i in range(numbers):
        print((i + 1) % 2)
        if (i + 1) % 2 == 0:
            count += 1

    return count


print(even_count(6))
