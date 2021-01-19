map_to_double = {i: i * 2 for i in range(3, 21)}

keys = map_to_double.keys()

for key in keys:
    if key % 2 != 0:
        map_to_double[key] = key * 3

print(map_to_double)
