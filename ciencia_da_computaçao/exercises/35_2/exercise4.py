import random

file = open("exercise4.txt", "r")

words = [word[:-1] for word in file]
file.close()


random_word = random.choice(words)


scrambled_word = "".join(random.sample(random_word, len(random_word)))
print(scrambled_word)

count = 0


def verify_input():
    global count
    guess_word = input("adivinhe a palavra: ")
    if guess_word != random_word and count < 3:
        count += 1
        if count == 3:
            return print(f"Computer wins, the word was {random_word}")
        print("try again")
        verify_input()
    else:
        return print("You win!")


verify_input()
