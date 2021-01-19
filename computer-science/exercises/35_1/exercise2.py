list = [3, 3, 3]


def media(listNumber):
    count = 0

    for numbers in listNumber:
        count += numbers
    
    media = count / len(listNumber)

    return media


print(media(list))
