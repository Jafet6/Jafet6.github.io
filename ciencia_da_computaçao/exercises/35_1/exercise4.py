name_list = ["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"]


def larger_name(list):
    name = ""
    for list_name in list:
        if len(list_name) > len(name):
            name = list_name
    return name


print(larger_name(name_list))
