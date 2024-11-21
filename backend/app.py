from flask import Flask, jsonify
from flask_cors import CORS
import random

app = Flask(__name__)
CORS(app)

quotes = [
    "The only limit to our realization of tomorrow is our doubts of today.",
    "Do what you can, with what you have, where you are.",
    "Act as if what you do makes a difference. It does.",
]

@app.route('/', methods=['GET'])
def home():
    return "Welcome to the Quote of the Day API!"

@app.route('/quote', methods=['GET'])
def get_quote():
    return jsonify({"quote": random.choice(quotes)})

if __name__ == '__main__':
    app.run(debug=True)
