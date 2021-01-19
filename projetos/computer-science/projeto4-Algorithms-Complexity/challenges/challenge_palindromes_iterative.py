def is_palindrome_iterative(word):
    high = len(word) - 1
    low = 0

    if word == "":
        return False

    while low < high:
        if word[low] == word[high]:
            high -= 1
            low += 1
        else:
            return False
    return True
