def answer(s):
    result = ""
    
    for char in s:
        char_code = ord(char)
    
        if (48 <= char_code <= 57) or (65 <= char_code <= 90) or (97 <= char_code <= 122):
            result += char
    
    return result