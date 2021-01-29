from node import Node


class LinkedList:
    def __init__(self):
        self.head_value = None
        self.__length = 0

    def __str__(self):
        return f"LinkedList(len={self.__length}, value={self.head_value})"

    def __len__(self):
        return self.__length

    def insert_first(self, value):
        first_value = Node(value)
        first_value.next = self.head_value
        self.head_value = first_value
        self.__length += 1

    def insert_last(self, value):
        if self.is_empty():
            return self.insert_first(value)

        new_last_value = Node(value)

        current_last_node = self.__get_node_at(len(self) - 1)

        current_last_node.next = new_last_value

        self.__length += 1

    def insert_at(self, value, position):
        if position < 1:
            return self.insert_first(value)
        if position >= len(self):
            return self.insert_last(value)

        next_value = Node(value)
        previous_node_position = self.__get_node_at(position - 1)
        next_value.next = previous_node_position.next
        previous_node_position.next = next_value

        self.__length += 1

    def remove_first(self):
        value_to_be_removed = self.head_value
        if value_to_be_removed:
            self.head_value = self.head_value.next
            value_to_be_removed.next = None
            self.__length -= 1
        return value_to_be_removed

    def remove_last(self):
        if len(self) <= 1:
            return self.remove_first()

        current_penultimate_node = self.__get_node_at(len(self) - 2)
        value_to_be_removed = current_penultimate_node.next

        current_penultimate_node.next = None

        self.__length -= 1
        return value_to_be_removed

    def remove_at(self, position):
        if position < 1:
            return self.remove_first()
        if position >= len(self):
            return self.remove_last()

        previous_to_be_removed = self.__get_node_at(position - 1)
        value_to_be_removed = previous_to_be_removed.next

        previous_to_be_removed.next = value_to_be_removed.next

        value_to_be_removed.next = None

        self.__length -= 1

        return value_to_be_removed

    def get_element_at(self, position):
        value_returned = None
        value_to_be_returned = self.__get_node_at(position)

        if value_to_be_returned:
            value_returned = Node(value_to_be_returned.value)

        return value_returned

    def __get_node_at(self, position):
        value_to_be_returned = self.head_value
        if value_to_be_returned:
            while position > 0 and value_to_be_returned.next:
                value_to_be_returned = value_to_be_returned.next
                position -= 1
        return value_to_be_returned

    def public_get_node_at(self, position):
        value_to_be_returned = self.head_value
        if value_to_be_returned:
            while position > 0 and value_to_be_returned.next:
                value_to_be_returned = value_to_be_returned.next
                position -= 1
        return value_to_be_returned

    def index_of(self, value):
        for i in range(len(self)):
            node_value = self.__get_node_at(i).value
            if node_value == value:
                return i
        return -1

    def clear(self):
        self.head_value = None
        self.__length = 0

    def is_empty(self):
        return not self.__length

    def remove_duplicates(self):
        alredy_seen_in_list = set()
        previous_value = self.head_value
        current_value = self.head_value
        count_remove = 0
        for _ in range(len(self)):
            if current_value.value in alredy_seen_in_list:
                current_value_next = current_value.next
                current_value.next = None
                current_value = current_value_next
                previous_value.next = current_value
                count_remove += 1
            else:
                previous_value = current_value
                alredy_seen_in_list.add(current_value.value)
                current_value = current_value.next

        self.__length -= count_remove
        return self


linked_list_with_duplicates = LinkedList()
linked_list_with_duplicates.insert_last(1)
linked_list_with_duplicates.insert_last(1)
linked_list_with_duplicates.insert_last(2)
linked_list_with_duplicates.insert_last(2)
linked_list_with_duplicates.insert_last(2)
linked_list_with_duplicates.insert_last(1)
linked_list_with_duplicates.insert_last(2)
linked_list_with_duplicates.remove_duplicates()
print(linked_list_with_duplicates)
