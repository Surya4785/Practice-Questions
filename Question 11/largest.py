def answer(num): 
    for i in range(len(num) - 1, -1, -1):
        if int(num[i]) % 2 == 1:
            return num[:i + 1]
    
    return ""  # Return an empty string if no odd digit is found
    print(num)
