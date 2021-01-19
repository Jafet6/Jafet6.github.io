def blefe_wins(dict):
    player1, player2 = dict.keys()

    set_player1 = set(dict[player1])
    set_player2 = set(dict[player2])

    diff_player1_to_player2 = set_player1.difference(set_player2)
    diff_player2_to_player1 = set_player2.difference(set_player1)

    player1_pontuation = max(diff_player1_to_player2) - min(
        diff_player1_to_player2
    )
    player2_pontuation = max(diff_player2_to_player1) - min(
        diff_player2_to_player1
    )

    if player1_pontuation > player2_pontuation:
        return player1
    elif player1_pontuation == player2_pontuation:
        return (player1, player2)
    else:
        return player2


entrada = {"Clara": [0, 1, 7, 9, 10], "Marco": [0, 2, 8, 9, 10]}

print(blefe_wins(entrada))
# saída: 'Marco'