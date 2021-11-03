from flask import Flask, render_template, request
from flask_debugtoolbar import DebugToolbarExtension
from stories import story

# Create app instance 
app = Flask(__name__)
app.config['SECRET_KEY'] = "oh-so-secret"

debug = DebugToolbarExtension(app)

# Homepage route 
@app.route('/')
def home():
    """Renders homepage."""
    
    return render_template("home.html", story=story)

# Story route 
@app.route("/story", methods=["POST", "GET"])
def display_story():
    """Displays the resulting story"""

    # Create text dictionary
    dictionary = {}

    # Generate story from submitted responses 
    for i in range(0, len(story.prompts)):
        dictionary[story.prompts[i]] = request.form[story.prompts[i]]
    print(dictionary)
    text = story.generate(dictionary)

    return render_template("story.html", text=text)
