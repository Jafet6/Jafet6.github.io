def find_biggest_substring(string):
    set_str = set(string)
    set_str_sub = set(string)

    size = 0
    size_try = 0
    for letter in string:
        if letter not in set_str:
            set_str = set_str_sub
            size_try = 0
        if letter in set_str:
            size_try += 1
            set_str.discard(letter)
        if size_try > size:
            size = size_try
    return size


print(find_biggest_substring('serdevemuitolegalmasehprecisoestudarbastante '))
