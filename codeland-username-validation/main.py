import re


def CodelandUsernameValidation(strParam):
    # username between 4 and 25 characters
    if len(strParam) < 4 or len(strParam) > 25:
        return False
    # start with letter
    if not(strParam[0].isalpha()):
        return False
    # only contains letters, numbers and the underscore char
    if not(re.match("^[A-Za-z0-9_]*$", strParam)):
        return False
    # does not end with underscore char
    if strParam[-1] == '_':
        return False
    return True


# keep this function call here
print(CodelandUsernameValidation(input()))
