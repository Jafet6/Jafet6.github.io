n = 5


def print_retangle(times):
    for i in range(times):
        for j in range(i + 1):
            print("*", end='')
        print()


print_retangle(n)
