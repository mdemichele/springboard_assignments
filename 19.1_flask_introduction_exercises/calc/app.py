from flask import Flask 
from operations import add, sub, mult, div

# Create app instance 
app = Flask(__name__)

# ROUTE 1 
@app.route('/add?a=<a>&b=<b>')
add(a, b)

# ROUTE 2 
@app.route('/sub?a=<a>&b=<b>')
sub(a, b)
    
# ROUTE 3 
@app.route('/mult?a=<a>&b=<b>')
mult(a, b)

# ROUTE 4 
@app.route('/div?a=<a>&b=<b>')
div(a, b)
    
    
