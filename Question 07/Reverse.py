def answer(a):
    words = a.split(" ")
    reverse_String = ""
    for w in words:
        reverse_word = ""
        for i in range(len(w) - 1, -1, -1):
            reverse_word += w[i]
        reverse_String += reverse_word