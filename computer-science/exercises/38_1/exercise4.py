def make_word(list_of_words, string_of_letters):
    dict_letters = {}
    words = ''
    control = False

    for letter in string_of_letters:
        if letter not in dict_letters:
            dict_letters[letter] = 1
        else:
            dict_letters[letter] += 1

    dict_letters_copy = dict_letters.copy()

    for word in list_of_words:
        for letter in word:
            if letter in dict_letters and dict_letters[letter] > 0:
                dict_letters[letter] -= 1
                control = True
            else:
                control = False
                break
        if control is True:
            words += word
        dict_letters = dict_letters_copy

    return len(words)


words = ["hello", "world", "students"]
chars = "welldonehoneyr"
print(make_word(words, chars))
