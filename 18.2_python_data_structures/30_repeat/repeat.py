def repeat(phrase, num):
    """Return phrase, repeated num times.

        >>> repeat('*', 3)
        '***'

        >>> repeat('abc', 2)
        'abcabc'

        >>> repeat('abc', 0)
        ''

    Ignore illegal values of num and return None:

        >>> repeat('abc', -1) is None
        True

        >>> repeat('abc', 'nope') is None
        True
    """
    returnPhrase = ""
    
    if num >= 0 and isinstance(num, int):
        for time in range(0, num):
            returnPhrase += phrase
        return returnPhrase 
    else:
        return None 
    
