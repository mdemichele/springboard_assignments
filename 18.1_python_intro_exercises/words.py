# Print out each word on a separate line in all uppercase 
# Only prints words that start with 'e'
def print_uppercase(words, must_start_with={"h", "y"}):
    """Given a list of words, print each word on separate line in all uppercase"""
    
    for word in words:
        if word[0] in must_start_with:
            upper = word.upper()
            print(upper)

print("Should print all on new lines, should return None: ", print_uppercase(["ellow", "hey", "goodbye", "yo", "yes"], {"h", "y"}))
