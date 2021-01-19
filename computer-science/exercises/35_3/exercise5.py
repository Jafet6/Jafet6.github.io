from pymongo import MongoClient


with MongoClient() as client:
    db = client.library
    categorie = input('Digite uma categoria: ')
    for book in db['books'].find({'categories': { '$all': [categorie] }}):
        print(book['title'])
