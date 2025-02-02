def answer(s):
  s = s.strip()
  length = 0
  for i in range(len(s) - 1, -1, -1): 
    if s[i] != ' ':
      length += 1
    elif length > 0:
      break
    
  return length