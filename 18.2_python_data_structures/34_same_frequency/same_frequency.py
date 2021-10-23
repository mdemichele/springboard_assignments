def same_frequency(num1, num2):
    """Do these nums have same frequencies of digits?
    
        >>> same_frequency(551122, 221515)
        True
        
        >>> same_frequency(321142, 3212215)
        False
        
        >>> same_frequency(1212, 2211)
        True
    """
    dict1 = {}
    dict2 = {}
    
    while num1 > 0:
        curr1 = num1 % 10
        dict1[curr1] = dict1.get(curr1, 0) + 1
        num1 = num1 // 10
    
    while num2 > 0:
        curr2 = num2 % 10
        dict2[curr2] = dict2.get(curr2, 0) + 1
        num2 = num2 // 10
    
    set1 = set(dict1.values())
    set2 = set(dict2.values())
    
    if set1 == set2:
        return True 
    else:
        return False 
    

         