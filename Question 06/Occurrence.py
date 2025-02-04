def answer(str):
    target = 'a'
    count = 0
    for char in str:
        if char == target:
            count += 1
    print(count)