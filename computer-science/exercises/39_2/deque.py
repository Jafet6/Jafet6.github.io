class Deque:
    FIRST_ELEMENT = 0

    def __init__(self, capacity):
        self._capacity = capacity
        self._data = list()

    def __len__(self):
        return len(self._data)

    def __str__(self):
        return "Deque(" + ", ".join(map(lambda x: str(x), self._data)) + ")"

    def push_front(self, value):
        if self._capacity == 0:
            raise Exception('Overflow')
        
        self._capacity -= 1
        self._data.insert(self.FIRST_ELEMENT, value)

    def push_back(self, value):
        if self._capacity == 0:
            raise Exception('Overflow')
        
        self._capacity -= 1
        self._data.append(value)

    def pop_front(self):
        if self._capacity == 10:
            raise Exception('Underflow')

        if self._data:
            self._capacity += 1
            return self._data.pop(self.FIRST_ELEMENT)

        return None

    def pop_back(self):
        if self._capacity == 10:
            raise Exception('Underflow')

        if self._data:
            self._capacity += 1
            return self._data.pop()

        return None

    def peek_front(self):
        if self._data:
            return self._data[self.FIRST_ELEMENT]
        return None

    def peek_back(self):
        if self._data:
            return self._data[len(self) - 1]
        return None

    def clear(self):
        return self._data.clear()

    def exists(self, value):
        if value in self._data:
            return True
        else:
            return False

    def peek(self, position, order="asc"):
        if order == "desc":
            return self._data[-1 - position]
        else:
            return self._data[position]

    def copy(self):
        return self._data.copy()


if __name__ == "__main__":
    deque = Deque(10)
    elements_1 = [6, 7, 8, 9, 10]
    elements_2 = [1, 2, 3, 4, 5]

    for elem in elements_1:
        deque.push_front(elem)

    for elem in elements_2:
        deque.push_back(elem)

    print(deque)  # saída: Deque(10, 9, 8, 7, 6, 1, 2, 3, 4, 5)
    print(deque.__len__())  # saída: 10

    print(deque.peek(0, 'desc'))

    # print(deque.pop_front())  # saída: 10, pois ele retorna o número retirado
    # print(deque.pop_back())  # saída: 5, pois ele retorna o número retirado

    # print(deque)  # saída: Deque(9, 8, 7, 6, 1, 2, 3, 4)
    # print(deque.__len__())  # saída: 8

    # print(deque.peek_front())  # saída: 9
    # print(deque.peek_back())  # saída: 4

    # print(deque.exists(20))  # saída: False
    # print(deque.exists(7))  # saída: True

