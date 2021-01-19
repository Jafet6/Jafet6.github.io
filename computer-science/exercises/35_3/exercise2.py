import requests


response = requests.get(' https://api.github.com/users/jafet6')

user = response.json()

print(user)