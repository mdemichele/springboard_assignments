from random import randint 
"""Word Finder: finds random words from a dictionary."""


class WordFinder:
    """class contains method to find random words from a dictionary"""
    def __init__(self, pathname):
        """Class instance accepts a path to a file on disk that contains words, one word per line"""
        self._words = self.__makeWords(pathname)
        
    def __makeWords(self, pathname):
        """Returns a list of words taken from the specified file"""
        words = []
        with open(pathname) as f:
            for line in f:
                line = line.strip()
                words.append(line)
        return words 
    
    def random(self):
        """Returns a random word from the list of words"""
        randomNum = randint(0, len(self._words) - 1)
        return self._words[randomNum]
        
class SpecialWordFinder(WordFinder):
    """subclass of WordFinder to find random words from a dictionary with a few added specifications"""
    def __init__(self, pathname):
        self._words = self.__makeSpecialWords(pathname)
    
    def __makeSpecialWords(self, pathname):
        """Returns a list of words taken from the specied file, skips blank lines and comment lines"""
        words = []
        with open(pathname) as f:
            for line in f:
                line = line.strip()
                if line != "" and line[0] != "#":
                    words.append(line)
        return words 
        
def main():
    """Main Function"""
    
    wordFinder = SpecialWordFinder("./words.txt")
    
    random = wordFinder.random()
    print("Should return a random word: " + random)
    
if __name__ == "__main__":
    main()