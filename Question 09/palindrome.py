# palindrome
def answer(str):
org = str
rev = ""    for i in range(len(str) - 1, -1, -1):
        rev += str[i]

    if org == rev:
        print("Palindrome")
    else:
        print("Not Palindrome")</code></pre>
