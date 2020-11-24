liters = 30
gas_type = "G"


def calculate_total_gas_type(qnt, gas):
    if gas == "G":
        if qnt <= 20:
            return (qnt * 2.50) * 0.96
        return (qnt * 2.50) * 0.94
    elif gas == "A":
        if qnt <= 20:
            return (qnt * 1.90) * 0.97
        return (qnt * 1.90) * 0.95


print(calculate_total_gas_type(liters, gas_type))
