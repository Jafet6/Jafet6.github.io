def fazer_combinacao(lista):
    boas_combinacoes = 0
    for i in range(len(lista)):
        for j in range(len(lista[i:])):
            if lista[i] == lista[i:][j]:
                boas_combinacoes += 1
    return boas_combinacoes


print(fazer_combinacao([1, 3, 1, 1, 2, 3]))
