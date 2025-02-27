# longest common prefix.
def answer(strs):
if not strs:
    return ""

pref = strs[0]
pref_len = len(pref)

for i in range(1, len(strs)):
    s = strs[i]
    while not s.startswith(pref):
        pref_len -= 1
        if pref_len == 0:
            return ""
        pref = pref[:pref_len]

return pref</code></pre>
