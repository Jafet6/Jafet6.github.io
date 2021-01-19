start_time = [2, 1, 2, 1, 4, 4]
end_time = [2, 2, 3, 5, 5, 5]


def study_schedule(start_time, end_time, target_time):
    count = 0

    for i in range(len(start_time)):
        if end_time[i] >= target_time and start_time[i] <= target_time:
            count += 1

    return count


print(study_schedule(start_time, end_time, 3))
