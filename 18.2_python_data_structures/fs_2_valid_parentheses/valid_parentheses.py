def valid_parentheses(parens):
    """Are the parentheses validly balanced?

        >>> valid_parentheses("()")
        True

        >>> valid_parentheses("()()")
        True

        >>> valid_parentheses("(()())")
        True

        >>> valid_parentheses(")()")
        False

        >>> valid_parentheses("())")
        False

        >>> valid_parentheses("((())")
        False

        >>> valid_parentheses(")()(")
        False
    """
    stack = []
    
    for el in parens:
        if el == "(":
            stack.append("(")
        else:
            if len(stack) >= 1:
                stack.pop()
            else:
                return False 
            
    if len(stack) > 0:
        return False
    else: 
        return True 