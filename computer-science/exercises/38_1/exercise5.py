hierarchy = {
    1: [2, 3],
    2: [4],
    3: [],
    4: [5, 6],
    5: [7],
    6: [],
    7: [],
}


def hierarchy_score(person):
    subordinate = len(hierarchy[person]) + 1

    for person in hierarchy[person]:
        subordinate += hierarchy_score(person) - 1

    return subordinate


print(hierarchy_score(1))
