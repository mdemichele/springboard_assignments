from flask import Flask, request 
from operations import add, sub, mult, div

# Create app instance 
app = Flask(__name__)

# ROUTE 1 
@app.route('/add')
def add_nums():
    """Handles GET requests to /add endpoint"""
    a = int(request.args.get("a"))
    b = int(request.args.get("b"))
    answer = add(a, b)
    return str(answer)

# ROUTE 2 
@app.route('/sub')
def sub_nums():
    """Handles GET requests to /sub endpoint"""
    a = int(request.args.get("a"))
    b = int(request.args.get("b"))
    answer = sub(a, b)
    return str(answer)
    
# ROUTE 3 
@app.route('/mult')
def mult_nums():
    """Handles GET requests to /mult endpoint"""
    a = int(request.args.get("a"))
    b = int(request.args.get("b"))
    answer = mult(a, b)
    return str(answer)

# ROUTE 4 
@app.route('/div')
def div_nums():
    """Handles GET requests to /div endpoint"""
    a = int(request.args.get("a"))
    b = int(request.args.get("b"))
    answer = div(a, b)
    return str(answer)
    
# ROUTE 5 
@app.route('/math/<operation>')
def handle_all(operation):
    """Handles GET requests to /math endpoint"""
    
    a = int(request.args.get("a"))
    b = int(request.args.get("b"))
    
    if operation == "add":
        answer = add(a, b)
        return str(answer)
    elif operation == "sub":
        answer = sub(a, b)
        return str(answer)
    elif operation == "mult":
        answer = mult(a, b)
        return str(answer)
    elif operation == "div":
        answer = div(a, b)
        return str(answer)
    else:
        return None 
    
    
    
