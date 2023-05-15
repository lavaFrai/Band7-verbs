import json


verbs = json.load(open('assets/data/verbs.json'))["verbs"]
alphabet = json.load(open('assets/data/alphabet.json'))

count = {}
for i in alphabet:
    print(verbs[0])
    count[i.lower()] = len(list(filter(lambda x : x["infinitive"].startswith(i.lower()), verbs)))
print(count)
