class StackOverflow(Exception):
    pass


class Stack:
    def __init__(self):
        self._data = list()

    def size(self):
        return len(self._data)

    def is_empty(self):
        return not bool(self.size())

    def push(self, value):
        self._data.append(value)

    def pop(self):
        if self.is_empty():
            return None

        value = self._data[-1]
        del self._data[-1]
        return value

    def peek(self):
        if self.is_empty():
            return None
        value = self._data[-1]
        return value

    def clear(self):
        self._data.clear()

    def __str__(self):
        str_items = ""
        for i in range(self.size()):
            value = self._data[i]
            str_items += str(value)
            if i + 1 < self.size():
                str_items += ", "

        return "Stack(" + str_items + ")"

    def min_value(self):
        if self.is_empty():
            return None

        min_number = self._data[0]
        for number in self._data:
            if number < min_number:
                min_number = number
        return min_number


class LimitedStack(Stack):
    def __init__(self, limit):
        super().__init__()
        self.limit = limit

    def push(self, value):
        if super().size() + 1 > self.limit:
            raise StackOverflow()


if __name__ == "__main__":
    elements = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    content_stack = Stack(2)

    for elem in elements:
        content_stack.push(elem)

    # print(content_stack)
    # print(content_stack.min_value())
    # print(content_stack.size())
    # print(content_stack.peek())
    # print(content_stack.pop())
    # print(content_stack.peek())
    # print(content_stack.size())
    # print(content_stack.clear())
    # print(content_stack.size())