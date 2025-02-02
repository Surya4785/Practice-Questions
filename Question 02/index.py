def answer(input):
    
    haystack = input['haystack'] 
    needle = input['needle']
    
   
    if len(haystack) < len(needle):
        return -1
    
   
    for i in range(len(haystack) - len(needle) + 1):
        if haystack[i:i + len(needle)] == needle:
            return i  
    return -1 