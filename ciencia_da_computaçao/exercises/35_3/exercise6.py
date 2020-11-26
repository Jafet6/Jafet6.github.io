from pymongo import MongoClient

with MongoClient() as client:
    db = client.library
    for categorie in db['books'].aggregate([
      { '$unwind': '$categories' },
      {
        '$group': {
          '_id': '$categories',
          'count': { '$sum': 1 }
        }
      },
      {
        '$sort': {
          'count': -1
        }
      }
    ]):
        print(f"{categorie['_id']} - {categorie['count']}")

        