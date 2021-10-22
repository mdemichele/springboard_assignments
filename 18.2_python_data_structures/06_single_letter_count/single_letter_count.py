def single_letter_count(word, letter):
    """How many times does letter appear in word (case-insensitively)?
    
        >>> single_letter_count('Hello World', 'h')
        1
        
        >>> single_letter_count('Hello World', 'z')
        0
        
        >>> single_letter_count("Hello World", 'l')
        3
    """
    dictionary = {}
    lower = word.lower()

    for curr in word.lower():
        if dictionary.get(curr) != None:
            dictionary[curr] = dictionary[curr] + 1
        else:
            dictionary[curr] = 1
    # print(dictionary[letter])
    if dictionary.get(letter) == None:
        return 0
    else:
        return dictionary[letter]
    

       