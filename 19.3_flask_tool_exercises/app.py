from flask import Flask, flash, request, redirect, render_template, session
from flask_debugtoolbar import DebugToolbarExtension
from surveys import Question, Survey, surveys 

# Define instance of app 
app = Flask(__name__)

app.config['SECRET_KEY'] = "oh-so-secret"

debug = DebugToolbarExtension(app)

# Users answers are stored in the reponses list 
correctQuestion = 0

# root route 
@app.route("/")
def display_root():
    """Renders home page"""
    return render_template("home.html")
    
# Reset Responses session and redirect 
@app.route("/reset", methods=["POST"])
def reset_form():
    # Reset reponses 
    session["responses"] = []
    return redirect("/question/0")

# questions route
@app.route("/question/<questionNum>")
def display_form(questionNum):
    """Renders From asking the current question"""
    global correctQuestion 
    
    # Only display question page if user requests the correctQuestion 
    if int(questionNum) == correctQuestion and int(questionNum) < len(surveys["satisfaction"].questions):
        # Get the question from the surveys data structure 
        question = surveys["satisfaction"].questions[int(questionNum)]
        return render_template("questionForm.html", question=question, questionNum=questionNum)
    
    # Redirect to thank you page if user has completed the survey already
    elif int(questionNum) > len(surveys["satisfaction"].questions) and correctQuestion > len(surveys["satisfaction"].questions):
        return render_template("thankyou.html")
        
    # Otherwise, redirect to the correct question 
    else:
        flash("You attempted to answer the wrong question! Why would you do that?")
        return redirect(f"/question/{correctQuestion}")

# answers route 
@app.route("/answer", methods=["POST"])
def store_answer():
    """Stores an answer in the responses list amd redirects user"""
    # Get the answer from the request object 
    answer = request.form["question"]
    
    currentQuestion = request.form["questionNum"]
    
    # Add answer to the responses list 
    responses = session["responses"]
    responses.append(answer)
    session["responses"] = responses
    
    # Increment currentQuestion 
    currentQuestion = int(currentQuestion) + 1
    global correctQuestion
    correctQuestion += 1
    
    # Redirect to next question until end of questions 
    if currentQuestion < len(surveys["satisfaction"].questions):
        return redirect(f"/question/{currentQuestion}")
    else:
        return render_template("thankyou.html")
        
