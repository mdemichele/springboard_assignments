def flip_case(phrase, to_swap):
    """Flip [to_swap] case each time it appears in phrase.

        >>> flip_case('Aaaahhh', 'a')
        'aAAAhhh'

        >>> flip_case('Aaaahhh', 'A')
        'aAAAhhh'

        >>> flip_case('Aaaahhh', 'h')
        'AaaaHHH'

    """
    compare = to_swap.lower()
    returnString = ""
    
    for letter in phrase:
        # If letter matches AND is uppercase 
        if letter.lower() == compare:
            newLetter = letter.swapcase()
        else:
            newLetter = letter 
        # Add swapped case letter to returnString 
        returnString += newLetter
    
    return returnString
            
    