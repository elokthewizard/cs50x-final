keyboard = document.getElementById("keyboard");
root = document.getElementById("rootnote");
major = document.getElementById("major");
minor = document.getElementById("minor");

// # define an octave
let root_notes = {
    "C": 0,
    "C&#35;": 1,
    "D": 2,
    "D&#35;": 3,
    "E": 4,
    "F": 5,
    "F&#35;": 6,
    "G": 7,
    "G&#35;": 8,
    "A": 9,
    "A&#35;": 10,
    "B": 11,
}

// inverse table of intervals

let reversed_root_notes = {};

for (let key in root_notes) {
    let value = root_notes[key];
    reversed_root_notes[value] = key;
}

// access svg
// this should work but i cant find  a soultion
const imgElement = document.getElementById("keyboard");
const svgContent = imgElement.contentDocument;

root = 0;

function digitize_note(root) {
 	return root_notes.get(root, 0);
}

function letterize_digit(digit) {
    return reversed_root_notes[digit];
}

if (major.checked) {
    const createMaj = (root) => {
        let third = root + 4;
        let fifth = root + 7;
        return [root, third, fifth];
    };
    const majorChord = createMaj(root);
    console.log(majorChord);
    for (let note of majorChord) {
        note = letterize_digit(note);
        console.log(note)
        const divElement = svgContent.getElementById(note);
        
        if (divElement) {
            divElement.style.fill = "yellow";
        }
    }
}

if (minor.checked) {
    console.log("minor");
}

octave = 12

root = 0
// request.form.get('rootnote', "C")



// reverse_root_notes = {
// 	value: key for key, value in root_notes.items()}

// def digitize_note(root):
// 	return root_notes.get(root, 0)

// def letterize_digit(digit):
// 	return reverse_root_notes.get(digit)
	


// # store valid chord values as ltters to be passed to css
// major = create_maj(0)
// chord = []

// for digit in major:
//     chord.append(letterize_digit(digit))



// def create_maj(root):
// 	root = root
// 	third = root + 4
// 	fifth = root + 7
// 	return [root, third, fifth]

// def create_min(root):
// 	root = root
// 	third = root + 4
// 	fifth = root + 7
	
// def create_7(root):
// 	root = root
// 	third = root + 4
// 	fifth = root + 7
// 	seventh = root + 10
	
// def create_min7(root):
// 	root = root
// 	third = root + 3
// 	fifth = root + 7
// 	seventh = root + 10
	
// def create_maj7(root):
// 	root = root
// 	third = root + 4
// 	fifth = root + 7
// 	seventh = root + 11
	
// def create_minMaj7(root):
// 	root = root
// 	third = root + 4
// 	fifth = root + 7

// def create_maj6(root):
// 	root = root
// 	third = root + 4
// 	fifth = root + 7
// 	seventh = root + 9
	
// def create_min6(root):
// 	root = root
// 	third = root + 3
// 	fifth = root + 7
// 	seventh = root + 9
	
// def create_6over9(root):
// 	root = root
// 	third = root + 4
// 	fifth = root + 7
// 	seventh = root + octave + 2
	
// def create_5(root):
// 	root = root
// 	fifth = root + 7
	
// def create_9(root):
// 	root = root
// 	third = root + 4
// 	fifth = root + 7
// 	seventh = root + 10
// 	ninth = root + octave + 2
	
// def create_min9(root):
// 	root = root
// 	third = root + 3
// 	fifth = root + 7
// 	seventh = root + 10
// 	ninth = root + octave + 2
	
// def create_maj9(root):
// 	root = root
// 	third = root + 4
// 	fifth = root + 7
// 	seventh = root + 11
// 	ninth = root + octave + 2
	
// def create_11(root):
// 	root = root
// 	third = root + 4
// 	fifth = root + 7
// 	seventh = root + 10
// 	ninth = root + octave + 2
// 	eleventh = root + octave + 5
	
// def create_min11(root):
// 	root = root
// 	third = root + 3
// 	fifth = root + 7
// 	seventh = root + 10
// 	ninth = root + octave + 2
// 	eleventh = root + octave + 5
	
// def create_maj11(root):
// 	root = root
// 	third = root + 4
// 	fifth = root + 7
// 	seventh = root + 11
// 	ninth = root + octave + 2
// 	eleventh = root + octave + 5
	
// def create_13(root):
// 	root = root
// 	third = root + 4
// 	fifth = root + 7
// 	seventh = root + 10
// 	ninth = root + octave + 2
// 	eleventh = root + octave + 5
// 	thirteenth = root + octave + 9
	
// def create_min13(root):
// 	root = root
// 	third = root + 3
// 	fifth = root + 7
// 	seventh = root + 10
// 	ninth = root + octave + 2
// 	eleventh = root + octave + 5
// 	thirteenth = root + octave + 9
	
// def create_maj13(root):
// 	root = root
// 	third = root + 4
// 	fifth = root + 7
// 	seventh = root + 11
// 	ninth = root + octave + 2
// 	thirteenth = root + octave + 9
	
// def create_add9(root):
// 	root = root
// 	third = root + 4
// 	fifth = root + 7
// 	seventh = root + octave + 2
	
// def create_add2(root):
// 	root = root
// 	third = root + 2
// 	fifth = root + 4
// 	seventh = root + 7
	
// def create_7minus5(root):
// 	root = root
// 	third = root + 4
// 	fifth = root + 6
// 	seventh = root + 10
	
// def create_7plus5(root):
// 	root = root
// 	third = root + 4
// 	fifth = root + 8
// 	seventh = root + 10
	
// def create_sus4(root):
// 	root = root
// 	third = root + 5
// 	fifth = root + 7
	
// def create_sus2(root):
// 	root = root
// 	third = root + 2
// 	fifth = root + 7
	
// def create_dim(root):
// 	root = root
// 	third = root + 3
// 	fifth = root + 6
	
// def create_dim7(root):
// 	root = root
// 	third = root + 3
// 	fifth = root + 6
// 	seventh = root + 9
	
// def create_min7b5(root):
// 	root = root
// 	third = root + 3
// 	fifth = root + 6
// 	seventh = root + 10
	
// def create_aug(root):
// 	root = root
// 	third = root + 4
// 	fifth = root + 8
	
// def create_aug7(root):
// 	root = root
// 	third = root + 4
// 	fifth = root + 8
// 	seventh = root + 10