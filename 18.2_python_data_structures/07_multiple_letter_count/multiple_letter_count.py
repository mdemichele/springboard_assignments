def multiple_letter_count(phrase):
    """Return dict of {ltr: frequency} from phrase.

        >>> multiple_letter_count('yay')
        {'y': 2, 'a': 1}

        >>> multiple_letter_count('Yay')
        {'Y': 1, 'a': 1, 'y': 1}
    """
    dictionary = {}
    
    for curr in phrase:
        if dictionary.get(curr) != None:
            dictionary[curr] = dictionary[curr] + 1
        else:
            dictionary[curr] = 1

    return dictionary