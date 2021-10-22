def mode(nums):
    """Return most-common number in list.

    For this function, there will always be a single-most-common value;
    you do not need to worry about handling cases where more than one item
    occurs the same number of times.

        >>> mode([1, 2, 1])
        1

        >>> mode([2, 2, 3, 3, 2])
        2
    """
    dict = {}
    
    # Fill the dictionary with frequencies 
    for val in nums:
        dict[val] = dict.get(val, 0) + 1
    
    # Calculate max frequency 
    maxToReturn = max(dict.values())
    
    # Loop through dict and find where frequency occurs 
    for (val, count) in dict.items():
        if maxToReturn == count:
            return val