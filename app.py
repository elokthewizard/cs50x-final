import os, flask, cs50
from flask import Flask, redirect, request, render_template
from cs50 import SQL

app = Flask(__name__)

# setup flask to run

if __name__ == '__main__':
	app.run(debug=True)

# connect sql database
db = SQL("sqlite:///static/mail.db")

# define routes

@app.route('/success/<name>')
def success(name):
	return 'welcome %s' % name

@app.route('/', methods=['POST', 'GET'])
def index():
	if request.method == "POST":
		print('woah')
		return "whoopsie"
	return render_template('index.html')

@app.route('/signup', methods=['POST', 'GET'])
def login():
	if request.method == "POST":
		print("Yo thats a post fs")
	else:
		return render_template('signup.html')
	

@app.route('/about', methods=['GET'])
def about():
	if request.method == "GET":
		return render_template('about.html')