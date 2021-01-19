from challenges.sorts.merge_sort_array import merge_sort


def is_anagram(first_string, second_string):
    string_one_sorted = ''.join(merge_sort(list(first_string)))
    string_two_sorted = ''.join(merge_sort(list(second_string)))

    if string_one_sorted == string_two_sorted:
        return True
    else:
        return False
