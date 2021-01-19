import requests
from parsel import Selector

URL_BASE = "http://books.toscrape.com/catalogue/"


def fetch_request():
    response = requests.get(URL_BASE + "the-grand-design_405/index.html")

    selector = Selector(text=response.text)

    img_url = selector.css(".active img::attr(src)").get()
    title = selector.css(".product_main h1::text").get()
    price = selector.css(".price_color::text").get()[2:]
    description = selector.css("#product_description ~ p::text").get()
    in_stock = selector.css(".product_main .availability::text").re_first("\d")

    suffix = "...more"
    if description.endswith(suffix):
        description = description[:-len(suffix)]

    print(in_stock)
    return print(f"{title}, {price}, {description}, {img_url}, {in_stock}")


fetch_request()
