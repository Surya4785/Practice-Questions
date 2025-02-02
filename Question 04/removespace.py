def answer(str):
    result = ""

    for i in range(len(str)):
      if str[i] != ' ':
        result += str[i]
    print(result) 