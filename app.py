from flask import Flask, redirect, url_for, request
app = Flask(__name__)

@app.route('/success/<name>')
def success(name):
	return 'welcome %s' % name

@app.route('/login', methods=['POST', 'GET'])
def login():
	if request.method == "POST":
		user = request.form['nm']
		return redirect(url_for('success', name=user))
	else:
		user = request.form['nm']
		return redirect(url_for('success', name=user))
	
if __name__ == '__main__':
	app.run(debug=True)

# TO DO: setup flask lol
octave = 12

root = request.form.get('rootnote', "C")

def switch(root):
	root_notes = {
		"C": 0,
		"C#": 1,
		"D": 2,
		"D#": 3,
		"E": 4,
		"F": 5,
		"F#": 6,
		"G": 7,
		"G#": 8,
		"A": 9,
		"A#": 10,
		"B": 11,
	}
	return root_notes.get(root, 0)


def create_maj(root):
	root = root
	third = root + 4
	fifth = root + 7
	
def create_min(root):
	root = root
	third = root + 4
	fifth = root + 7
	
def create_7(root):
	root = root
	third = root + 4
	fifth = root + 7
	seventh = root + 10
	
def create_min7(root):
	root = root
	third = root + 3
	fifth = root + 7
	seventh = root + 10
	
def create_maj7(root):
	third = root + 4
	fifth = root + 7
	seventh = root + 11
	
def create_minMaj7(root):
	third = root + 4
	fifth = root + 7

def create_maj6(root):
	third = root + 4
	fifth = root + 7
	seventh = root + 9
	
def create_min6(root):
	third = root + 3
	fifth = root + 7
	seventh = root + 9
	
def create_6over9(root):
	third = root + 4
	fifth = root + 7
	seventh = root + octave + 2
	
def create_5(root):
	fifth = root + 7
	
def create_9(root):
	root = root
	third = root + 4
	fifth = root + 7
	seventh = root + 10
	ninth = root + octave + 2
	
def create_min9(root):
	root = root
	third = root + 3
	fifth = root + 7
	seventh = root + 10
	ninth = root + octave + 2
	
def create_maj9(root):
	root = root
	third = root + 4
	fifth = root + 7
	seventh = root + 11
	ninth = root + octave + 2
	
def create_11(root):
	root = root
	third = root + 4
	fifth = root + 7
	seventh = root + 10
	ninth = root + octave + 2
	eleventh = root + octave + 5
	
def create_min11(root):
	root = root
	third = root + 3
	fifth = root + 7
	seventh = root + 10
	ninth = root + octave + 2
	eleventh = root + octave + 5
	
def create_maj11(root):
	root = root
	third = root + 4
	fifth = root + 7
	seventh = root + 11
	ninth = root + octave + 2
	eleventh = root + octave + 5
	
def create_13(root):
	root = root
	third = root + 4
	fifth = root + 7
	seventh = root + 10
	ninth = root + octave + 2
	eleventh = root + octave + 5
	thirteenth = root + octave + 9
	
def create_min13(root):
	root = root
	third = root + 3
	fifth = root + 7
	seventh = root + 10
	ninth = root + octave + 2
	eleventh = root + octave + 5
	thirteenth = root + octave + 9
	
def create_maj13(root):
	root = root
	third = root + 4
	fifth = root + 7
	seventh = root + 11
	ninth = root + octave + 2
	thirteenth = root + octave + 9
	
def create_add9(root):
	root = root
	third = root + 4
	fifth = root + 7
	ninth = root + octave + 2
	
def create_add2(root):
	root = root
	third = root + 2
	fifth = root + 4
	seventh = root + 7
	
def create_7minus5(root):
	root = root
	third = root + 4
	fifth = root + 6
	seventh = root + 10
	
def create_7plus5(root):
	root = root
	third = root + 4
	fifth = root + 8
	seventh = root + 10
	
def create_sus4(root):
	root = root
	third = root + 5
	fifth = root + 7
	
def create_sus2(root):
	root = root
	third = root + 2
	fifth = root + 7
	
def create_dim(root):
	root = root
	third = root + 3
	fifth = root + 6
	
def create_dim7(root):
	root = root
	third = root + 3
	fifth = root + 6
	seventh = root + 9
	
def create_min7b5(root):
	root = root
	third = root + 3
	fifth = root + 6
	seventh = root + 10
	
def create_aug(root):
	root = root
	third = root + 4
	fifth = root + 8
	
def create_aug7(root):
	root = root
	third = root + 4
	fifth = root + 8
	seventh = root + 10