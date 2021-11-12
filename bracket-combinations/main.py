from math import factorial


def BracketCombinations(num):
    # typical problem of catalan number: https://en.wikipedia.org/wiki/Catalan_number
    # (2n!) / ((n + 1!)(n!))
    return int(factorial(2 * num) / (factorial(num + 1) * factorial(num)))


# keep this function call here
print(BracketCombinations(input()))
