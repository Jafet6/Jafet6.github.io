class Set:
    def __init__(self):
        self._list = [False for i in range(1001)]

    def add(self, number):
        self._list[number] = True
        return

    def __str__(self):
        return str({i for i in range(1001) if self._list[i] is True})

    def is_in(self, number):
        if self._list[number] is True:
            return True
        else:
            return False

    def union(self, conjuntoB):
        return {i for i in range(1001) if self._list[i] is True}.add(
            conjuntoB.__str__()
        )

    # def intersection(self, conjuntoB):
    #     self.is


if __name__ == "__main__":
    conjunto = Set()
    conjunto.add(0)
    conjunto.add(10)
    conjunto.add(100)
    conjunto.add(1000)

    conjuntoB = Set()
    conjuntoB.add(2)
    conjuntoB.add(20)
    conjuntoB.add(200)

    conjunto.union(conjuntoB)
    print(conjunto)
