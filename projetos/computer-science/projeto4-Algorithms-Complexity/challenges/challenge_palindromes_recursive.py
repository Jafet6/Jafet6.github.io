def is_palindrome_recursive(word, low, high):
    is_palindrome = None

    if word == '':
        return False

    while low < high:
        if word[low] == word[high]:
            low += 1
            high -= 1
            is_palindrome = True
            is_palindrome_recursive(word, low, high)
        else:
            is_palindrome = False
            return is_palindrome

    return is_palindrome


word = 'AGUA'
low = 0
high = len(word)

print(is_palindrome_recursive(word, low, high - 1))
