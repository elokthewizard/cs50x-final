const whiteKeys = document.querySelectorAll("svg-white-keys");
const blackKeys = document.querySelectorAll("svg-black-keys");

let rootnote = document.getElementById("root-selection");
let chordSelection = document.getElementById("chord-selection");

let root ="";
let chordType = "";


// handle rootnote selection
rootnote.addEventListener("click", (e) => {
    if (e.target.tagName == "INPUT" && root_notes.hasOwnProperty(e.target.id)) {
        root = e.target.id;
        if (chordType == "") {
            chordType = "major";
        }
        // alert(root);
        // alert(chordType);
        mapTones();
    };
});

// handle chord type selection
chordSelection.addEventListener("click", (e) => {
    if (e.target.tagName == "INPUT" && chordFunctions.hasOwnProperty(e.target.id)) {
        chordType = e.target.id;
        if (root == "") {
            root = "C";
        }
        // alert(chordType);
        // alert(root);
        mapTones();
    };
});

// # define an octave
octave = 12;

// define list of notes
let root_notes = {
    "C": 0,
    "Csharp": 1,
    "D": 2,
    "Dsharp": 3,
    "E": 4,
    "F": 5,
    "Fsharp": 6,
    "G": 7,
    "Gsharp": 8,
    "A": 9,
    "Asharp": 10,
    "B": 11,
};

// inverse list of notes 
let reversed_root_notes = {};

for (let key in root_notes) {
    let value = root_notes[key];
    reversed_root_notes[value] = key;
};

// numbers to letters
function letterize_digit(digit) {
   return reversed_root_notes[digit];
};

// letters to numbers
function digitize_note(root) {
    return root_notes[root];
};

// map chord
function mapTones() {
    console.log(chordType)
    console.log(root)
    root = digitize_note(root);
    chordType == chordFunctions[chordType] ? chordFunctions[chordType] : undefined;
    let chord = chordFunctions[chordType](root)
    console.log(chord);
    drawChord(chord);
};

function resetChordGraphic() {
    const whiteKeys = document.querySelectorAll(".svg-white-keys");
    const blackKeys = document.querySelectorAll(".svg-black-keys");
    whiteKeys.forEach(function(key) {
        const wholeNotes = key.querySelectorAll("*");
        wholeNotes.forEach(function(rect) {
            rect.style.fill = "white";
        });
    });
    blackKeys.forEach(function(key) {
        const inharmonicNotes = key.querySelectorAll("*");
        inharmonicNotes.forEach(function(rect) {
            rect.style.fill = "black";
        });
    });
};

// draw chord
function drawChord(chord) {
    for (let note of chord) {
        console.log(note);
        note = letterize_digit(note);
        console.log(note);

        let styled = document.getElementById(note);


        if (styled) {
            styled.style.fill = "green";
        } else {
            console.log('No SVG element with ID', note);
        }
    };
};


// rewrite chord functions as object methods
const chordFunctions = {
    major: function(root) {
        let third = root + 4;
        let fifth = root + 7;
        return [root, third, fifth];
    },
    minor: function(root) {
        let third = root + 3;
        let fifth = root + 7;
        return [root, third, fifth];
    },
    dom7: function(root) {
        let third = root + 4;
        let fifth = root + 7;
        let seventh = root + 10;
        return [root, third, fifth, seventh];
    },
    min7: function(root) {
    	let third = root + 3;
    	let fifth = root + 7;
    	let seventh = root + 10;
        return [root, third, fifth, seventh];
    },
    maj7: function(root) {
        let third = root + 4;
        let fifth = root + 7;
        let seventh = root + 11;
        return [root, third, fifth, seventh];
    },
    minMaj7: function(root) {
        let third = root + 3;
        let fifth = root + 7;
        let seventh = root + 11;
        return [root, third, fifth, seventh];
    },
    maj6: function(root) {
        let third = root + 4;
        let fifth = root + 7;
        let seventh = root + 9;
        return [root, third, fifth, seventh];
    },
    min6: function(root) {
        let third = root + 3
        let fifth = root + 7
        let seventh = root + 9
        return [root, third, fifth, seventh];
    },
    sixthNinth: function(root) {
        let third = root + 4;
        let fifth = root + 7;
        let seventh = root + octave + 2;
        return [root, third, fifth, seventh];
    },
    fifth: function(root) {
        let fifth = root + 7;
        return [root, fifth];
    },
    ninth: function(root) {
        let third = root + 4;
        let fifth = root + 7;
        let seventh = root + 10;
        let ninth = root + octave + 2;
        return [root, third, fifth, seventh, ninth]
    },
    min9: function(root) {
        let third = root + 3
        let fifth = root + 7
        let seventh = root + 10
        let ninth = root + octave + 2
        return [root, third, fifth, seventh, ninth]
    },
    maj9: function(root) {
        let third = root + 4
        let fifth = root + 7
        let seventh = root + 11
        let ninth = root + octave + 2
        return [root, third, fifth, seventh, ninth]
    },
    eleventh: function(root) {
        let third = root + 4
        let fifth = root + 7
        let seventh = root + 10
        let ninth = root + octave + 2
        let eleventh = root + octave + 5
        return [root, third, fifth, seventh, ninth, eleventh]
    },
    min11: function(root) {
        let third = root + 3
        let fifth = root + 7
        let seventh = root + 10
        let ninth = root + octave + 2
        let eleventh = root + octave + 5
        return [root, third, fifth, seventh, ninth, eleventh]
    },
    maj11: function(root) {
        let third = root + 4
        let fifth = root + 7
        let seventh = root + 11
        let ninth = root + octave + 2
        let eleventh = root + octave + 5
        return [root, third, fifth, seventh, ninth, eleventh]
    },
    thirteenth: function(root) {
        let third = root + 4
        let fifth = root + 7
        let seventh = root + 10
        let ninth = root + octave + 2
        let eleventh = root + octave + 5
        let thirteenth = root + octave + 9
        return [root, third, fifth, seventh, ninth, eleventh, thirteenth]
    },
    min13: function(root) {
        let third = root + 3
        let fifth = root + 7
        let seventh = root + 10
        let ninth = root + octave + 2
        let eleventh = root + octave + 5
        let thirteenth = root + octave + 9
        return [root, third, fifth, seventh, ninth, eleventh, thirteenth]
    },
    maj13: function(root) {
        let third = root + 4
        let fifth = root + 7
        let seventh = root + 11
        let ninth = root + octave + 2
        let thirteenth = root + octave + 9
        return [root, third, fifth, seventh, ninth, eleventh, thirteenth]
    },
    add9: function(root) {
        let third = root + 4
        let fifth = root + 7
        let seventh = root + octave + 2
        return [root, third, fifth, seventh]
    },
    add2: function(root) {
        let third = root + 2
        let fifth = root + 4
        let seventh = root + 7
        return [root, third, fifth, seventh]
    },
    sevenMinusFive: function(root) {
        let third = root + 4
        let fifth = root + 6
        let seventh = root + 10
        return [root, third, fifth, seventh]
    },
    sevenPlusFive: function(root) {
        let third = root + 4
        let fifth = root + 8
        let seventh = root + 10
        return [root, third, fifth, seventh]
    },
    sus4: function(root) {
        let third = root + 5
        let fifth = root + 7      
        return [root, third, fifth]
    },
    sus2: function(root) {
        let third = root + 2
        let fifth = root + 7
        return [root, third, fifth]
    },
    diminished: function(root) {
        let third = root + 3
        let fifth = root + 6
        return [root, third, fifth]
    },
    dim7: function(root) {
        let third = root + 3
        let fifth = root + 6
        let seventh = root + 9
        return [root, third, fifth, seventh]
    },
    min7b5: function(root) {
        let third = root + 3
        let fifth = root + 6
        let seventh = root + 10
        return [root, third, fifth, seventh]
    },
    aug: function(root) {
        let third = root + 4;
        let fifth = root + 8;
        return [root, third, fifth]
    },
    aug7: function(root) {
        let third = root + 4
        let fifth = root + 8
        let seventh = root + 10
        return [root, third, fifth, seventh]
    },
};




// request.form.get('rootnote', "C")

// function makeChord(root) {
//     if (chordType == "major") {
//         const createMaj = (root) => {
//             let third = root + 4;
//             let fifth = root + 7;
//             return [root, third, fifth];
//         };
//         return createMaj(root);
//     };
// };