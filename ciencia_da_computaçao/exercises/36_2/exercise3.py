class Quarto:
    def __init__(
        self, numero, andar, quantidade_de_hospedes, preco, reservado
    ):
        self.numero = numero
        self.andar = andar
        self.quantidade_de_hospedes = quantidade_de_hospedes
        self.preco = preco
        self.reservado = reservado

    def __eq__(self, other):
        return self.numero == other.numero

    def esta_reservado(self):
        self.reservado = not self.reservado


class Reserva:
    def __init__(self, quarto, hospede):
        self.quarto = quarto
        self.hospede = hospede

    def __eq__(self, other):
        return self.quarto == other.numero


class Hospede:
    def __init__(self, nome, cpf):
        self.nome = nome
        self.cpf = cpf


class Hotel:
    def __init__(self, nome, quartos, reservas):
        self.nome = nome
        self.quartos = quartos
        self.reservas = reservas

    def check_in(self, hospedes):
        quarto_escolhido = None
        for quarto in self.quartos:
            if quarto.quantidade_de_hospedes >= len(hospedes):
                quarto_escolhido = quarto.numero
                break

        if quarto_escolhido is None:
            raise IndexError(
                "Não há quartos disponíveis para essa quantidade de hospedes"
            )

        for quarto in self.quartos:
            if quarto.numero == quarto_escolhido:
                quarto.esta_reservado()

        for hospede in hospedes:
            self.reservas.append(Reserva(quarto_escolhido, hospede))

        print(self.reservas)

    def check_out(self, quarto):

        self.reservas = [
            quarto_reservas
            for quarto_reservas in self.reservas
            if quarto_reservas.quarto != quarto.numero
        ]

        for quarto_hotel in self.quartos:
            if quarto_hotel.numero == quarto.numero:
                quarto_hotel.esta_reservado()

        print(self.reservas)

    def quartos_disponiveis(self, quantidade):
        quartos_disponiveis = [
            quarto
            for quarto in self.quartos
            if quarto.quantidade_de_hospedes >= quantidade
            and quarto.reservado is False
        ]
        print(quartos_disponiveis)


quarto1 = Quarto(1, 1, 2, 100, False)
quarto2 = Quarto(2, 1, 3, 150, False)
quarto3 = Quarto(3, 1, 3, 150, False)
quarto4 = Quarto(4, 1, 2, 100, False)
hotel = Hotel("Hotel Eldorado", [quarto1, quarto2, quarto3, quarto4], [])
hotel.check_in(
    [Hospede("Jafet", "111.222.333-44"), Hospede("Isabella", "111.222.333-44")]
)
hotel.check_out(quarto1)
hotel.quartos_disponiveis(2)
