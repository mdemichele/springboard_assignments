"""Python serial number generator."""

class SerialGenerator:
    """Machine to create unique incrementing serial numbers.
    
    >>> serial = SerialGenerator(start=100)

    >>> serial.generate()
    100

    >>> serial.generate()
    101

    >>> serial.generate()
    102

    >>> serial.reset()

    >>> serial.generate()
    100
    """
    def __init__(self, start):
        """initializes class instances with start parameter"""
        self.start = start 
        self.current = self.start 
        
    def generate(self):
        """returns the next sequential number"""
        self.current += 1
        return self.current
        
    def reset(self):
        """resets the number back to original start value"""
        self.current = self.start 

def main():
    serial = SerialGenerator(100)
    print("Should be type of class SerialGenerator: " + str(type(serial)))
    # Test 
    num = serial.generate() 
    print("Should return 101: " + str(num))
    
    serial.reset()
    print("Should return 100: " + str(serial.current))

if __name__ == "__main__":
    main()
