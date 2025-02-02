def answer(str):
    count = 1
    for i in range(len(str) - 1):
      if str[i] == ' ' and str[i + 1] != ' ':
        count += 1
    print(count)