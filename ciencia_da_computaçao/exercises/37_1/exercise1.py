cartas = [1, 4, 4, 7, 6, 6]


def shuffle_deck(deck):
    half_array_leng = len(deck) // 2
    shuffled_deck = []

    for i in range(half_array_leng):
        shuffled_deck.append(deck[i])
        shuffled_deck.append(deck[half_array_leng + i])

    return shuffled_deck


print(shuffle_deck(cartas))
