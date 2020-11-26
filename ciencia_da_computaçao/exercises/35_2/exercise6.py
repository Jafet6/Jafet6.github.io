import random
import json

count = 0


def user_typed_pokemon(random_pokemon):
    choosed_pokemon = input("Which pokemon is that?  ")
    if choosed_pokemon != random_pokemon["name"]:
        print("Você Errou")
        global count
        print(random_pokemon["name"][: count + 1])
        count += 1
        user_typed_pokemon(random_pokemon)


with open("pokemons.json", "r") as file:
    random_pokemon = random.choice(json.load(file)["results"])
    pokemon_name_length = len(random_pokemon["name"])
    print(f"Name with: {pokemon_name_length} letters")
    user_typed_pokemon(random_pokemon)
