from flask import Flask 

# Create app instance 
app = Flask(__name__)

# ROUTE 1
@app.route('/welcome')
def say_welcome():
    return "welcome"

# ROUTE 2
@app.route('/welcome/home')
def welcome_home():
    return "welcome home"

# ROUTE 3 
@app.route('/welcome/back')
def welcome_back():
    return "welcome back"