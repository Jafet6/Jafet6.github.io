class Employee:
    def __init__(self, id_num, name):
        self.id_num = id_num
        self.name = name


class HashMap:
    def __init__(self):
        self._buckets = [None for i in range(10)]

    def get_address(self, id_num):
        return id_num % 10

    def insert(self, employee):
        address = self.get_address(employee.id_num)
        self._buckets[address] = employee

    def get_value(self, id_num):
        address = self.get_address(id_num)
        return self._buckets[address].name

    def has(self, id_num):
        address = self.get_address(id_num)
        return self._buckets[address] is not None

    def update_value(self, id_num, new_name):
        address = self.get_address(id_num)
        obj = self._buckets[address]
        obj.name = new_name
        return obj


employees = [(14, "name1"), (23, "name2"), (10, "name3"), (9, "name4")]


employee1 = Employee(employees[0][0], employees[0][1])
employee2 = Employee(employees[1][0], employees[1][1])
employee3 = Employee(employees[2][0], employees[2][1])
employee4 = Employee(employees[3][0], employees[3][1])

hash_map = HashMap()

hash_map.insert(employee1)
hash_map.insert(employee2)
hash_map.insert(employee3)
hash_map.insert(employee4)

print(hash_map.get_value(23))
print(hash_map.get_value(10))
