from challenges.sorts.merge_sort_array import merge_sort


def find_duplicate(nums):
    if type(nums) == list and len(nums) > 1 and type(nums[0]) == int:
        ordered_array = merge_sort(nums)
        high = len(nums)
        low = 1

        while low < high - 1:
            if (
                ordered_array[low] == ordered_array[low - 1]
                or ordered_array[low] == ordered_array[low + 1]
            ):
                return ordered_array[low]
            low += 2

        if nums[0] == nums[1]:
            return nums[0]
        else:
            return False

    return False


# def find_duplicate(nums):
#     if type(nums) == list and len(nums) > 1 and type(nums[0]) == int:
#         ordered_array = nums.sort()
#         high = len(nums)

#         for i in range(high - 1):
#             if ordered_array[i] == ordered_array[i + 1]:
#                 return ordered_array[i]

#         return False

#     return False


# def find_duplicate(nums):
#     try:
#         ordered_array = merge_sort(nums)
#         high = len(nums)

#         for i in range(high - 1):
#             if ordered_array[i] == ordered_array[i + 1]:
#                 return ordered_array[i]

#         return False
#     except:
#         return False


# nums = [3, 1, 2, 4, 6, 5, 7, 7, 7, 8]

# print(find_duplicate(nums))
