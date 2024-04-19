from flask import Flask, redirect, request, render_template, url_for
app = Flask(__name__)

if __name__ == '__main__':
	app.run(debug=True)

@app.route('/success/<name>')
def success(name):
	return 'welcome %s' % name

@app.route('/')
def index():
	if request.method == "POST":
		print('woah')
		return "whoopsie"
	return render_template('index.html')

@app.route('/login', methods=['POST', 'GET'])
def login():
	if request.method == "POST":
		user = request.form['nm']
		return redirect(url_for('success', name=user))
	else:
		user = request.form['nm']
		return redirect(url_for('success', name=user))
	

