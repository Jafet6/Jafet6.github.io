import json
import csv


def all_books(file):
    return [json.loads(line) for line in file]


def count_categories(all_books):
    categories = {}
    for book in all_books:
        for categorie in book["categories"]:
            if not categories.get(categorie):
                categories[categorie] = 0
            categories[categorie] += 1
    return categories


def percentage_calculator(total_books, categories_quantity):
    return [
        (key, (categories_quantity[key] / total_books))
        for key in categories_quantity
    ]


with open("books.json") as file:
    all_books = all_books(file)
    categories_quantity = count_categories(all_books)
    total_books = len(all_books)
    categories_percentage = percentage_calculator(
        total_books, categories_quantity
    )

with open("categories_with_percentage.csv", 'w') as file:
    writer = csv.writer(file)
    headers = ["categorie", "percentage"]
    writer.writerow(headers)
    for categorie, percentage in categories_percentage:
        writer.writerow([categorie, percentage])
