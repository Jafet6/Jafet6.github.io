from exercise1 import LinkedList


def remove_duplicates(linked_list):
    list_with_unique_elements = LinkedList()

    while linked_list:
        current_node = linked_list.remove_first()
        if list_with_unique_elements.index_of(current_node.value) == -1:
            list_with_unique_elements.insert_last(current_node.value)

    return list_with_unique_elements


linked_list_with_duplicates = LinkedList()
linked_list_with_duplicates.insert_last(1)
linked_list_with_duplicates.insert_last(1)
linked_list_with_duplicates.insert_last(2)
linked_list_with_duplicates.insert_last(2)
print(remove_duplicates(linked_list_with_duplicates))
