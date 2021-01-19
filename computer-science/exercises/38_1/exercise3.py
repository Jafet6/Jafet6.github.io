def count_letters(string):
    count_dict = {}

    for i in string:
        if i not in count_dict:
            count_dict[i] = 1
        else:
            count_dict[i] += 1

    return count_dict


print(count_letters("aaassdd"))
