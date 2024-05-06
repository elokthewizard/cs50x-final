import os, flask, cs50, re
from flask import Flask, redirect, request, render_template
from cs50 import SQL

app = Flask(__name__)

# setup flask to run

if __name__ == '__main__':
	app.run(debug=True)

# connect sql database
db = SQL("sqlite:///static/mail.db")

# define routes

@app.route('/', methods=['POST', 'GET'])
def index():
	if request.method == "POST":
		print('woah')
		return "whoopsie"
	return render_template('index.html')

@app.route('/signup', methods=['POST', 'GET'])
def signup():
	if request.method == "POST":
		email = request.form.get("email")
		name = request.form.get("name")
		checkbox = request.form.get("checkbox")
		if checkbox != "on":
			msg = "You have to tick the box..."
			return render_template("signup.html", msg=msg)
		
		# thanks tecadmin.net!
		email_regex = r"(^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$)"
		if re.match(email_regex, email):
			check_email = db.execute("SELECT COUNT(*) FROM mail_list WHERE email = ?", (email))
			check_name = db.execute("SELECT COUNT(*) FROM mail_list WHERE name = ?", (name))
		
			if int(check_email[0]['COUNT(*)']) > 0 or int(check_name[0]['COUNT(*)']) > 0:
				msg = "Thanks for signing up... again!"
				return render_template('signup.html', msg=msg) 
			
			if email is None or name is None:
				msg = "name/ email cannot be blank"
				render_template("signup.html", msg=msg)

			db.execute("INSERT INTO mail_list (email, name) VALUES (:email, :name)", email=email, name=name)
			msg = "Thanks for signing up!"
			return render_template('signup.html', msg=msg) 
		else:
			return False
		
	else:
		return render_template('signup.html')
	

@app.route('/about', methods=['GET'])
def about():
	if request.method == "GET":
		return render_template('about.html')
