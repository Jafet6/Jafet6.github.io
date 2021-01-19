def merge_sort(string):
    if len(string) <= 1:
        return string

    mid = len(string) // 2

    left, right = merge_sort(string[:mid]), merge_sort(string[mid:])

    new_string = string[:]
    return merge(left, right, new_string)


def merge(left, right, merged):
    left_cursor, right_cursor = 0, 0

    while left_cursor < len(left) and right_cursor < len(right):

        if left[left_cursor] <= right[right_cursor]:
            merged = (
                merged[: left_cursor + right_cursor]
                + left[left_cursor]
                + merged[left_cursor + right_cursor + 1:]
            )
            left_cursor += 1
        else:
            merged = (
                merged[: left_cursor + right_cursor]
                + right[right_cursor]
                + merged[left_cursor + right_cursor + 1:]
            )
            right_cursor += 1

    for left_cursor in range(left_cursor, len(left)):
        merged = (
            merged[: left_cursor + right_cursor]
            + left[left_cursor]
            + merged[left_cursor + right_cursor + 1:]
        )

    for right_cursor in range(right_cursor, len(right)):
        merged = (
            merged[: left_cursor + right_cursor]
            + right[right_cursor]
            + merged[left_cursor + right_cursor + 1:]
        )

    return merged
