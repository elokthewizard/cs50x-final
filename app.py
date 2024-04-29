import os
from flask import Flask, redirect, request, render_template
app = Flask(__name__)

# setup flask to run

if __name__ == '__main__':
	app.run(debug=True)

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

@app.route('/login', methods=['POST', 'GET'])
def login():
	if request.method == "POST":
		user = request.form['nm']
		return redirect('success', name=user)
	else:
		user = request.form['nm']
		return redirect('success', name=user)
	

@app.route('/about', methods=['GET'])
def about():
	if request.method == "GET":
		return render_template('about.html')