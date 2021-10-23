def reverse_vowels(s):
    """Reverse vowels in a string.

    Characters which re not vowels do not change position in string, but all
    vowels (y is not a vowel), should reverse their order.

    >>> reverse_vowels("Hello!")
    'Holle!'

    >>> reverse_vowels("Tomatoes")
    'Temotaos'

    >>> reverse_vowels("Reverse Vowels In A String")
    'RivArsI Vewols en e Streng'

    reverse_vowels("aeiou")
    'uoiea'

    reverse_vowels("why try, shy fly?")
    'why try, shy fly?''
    """
    vowels = ("a", "e", "i", "o", "u", "A", "E", "I", "O", "U")
    vowelOrder = []
    vowelList = []
    
    for letter in range(len(s)):
        if s[letter] in vowels:
            vowelOrder.append(letter)
            vowelList.append(s[letter])
    
    vowelOrder.reverse()
    
    sList = list(s)
    
    for i in range(len(vowelList)):
        sList[vowelOrder[i]] = vowelList[i]
    
    return ''.join(sList)
    