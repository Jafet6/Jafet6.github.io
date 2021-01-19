from deque import Deque


def is_palindrom(word):
    deque = Deque(100)

    for letter in word:
        deque.push_back(letter)

    while len(deque) > 1:
        first_letter = deque.pop_front()
        last_letter = deque.pop_back()

        if first_letter != last_letter:
            return False
        
    return True


print(is_palindrom('madam'))