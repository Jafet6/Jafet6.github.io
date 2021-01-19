def mdc_finder(numb1, numb2):
    mdc = numb2

    rest = max(numb1, numb2) % min(numb1, numb2)

    if rest == 0:
        mdc = numb2
        return mdc

    mdc = mdc_finder(min(numb1, numb2), rest)
    return mdc


def mdc2(a, b):
    if b == 0:
        return a
    return mdc2(b, a % b)


print(mdc2(30, 48))
