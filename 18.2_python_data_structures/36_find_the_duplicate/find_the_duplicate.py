def find_the_duplicate(nums):
    """Find duplicate number in nums.

    Given a list of nums with, at most, one duplicate, return the duplicate.
    If there is no duplicate, return None

        >>> find_the_duplicate([1, 2, 1, 4, 3, 12])
        1

        >>> find_the_duplicate([6, 1, 9, 5, 3, 4, 9])
        9

        >>> find_the_duplicate([2, 1, 3, 4]) is None
        True
    """
    dict = {}
    for num in nums:
        dict[num] = dict.get(num, 0) + 1
    keys = dict.keys()
    
    for key in keys:
        if dict[key] > 1:
            return key
    
    return None