let keyboard = document.getElementById("keyboard");
let root = document.getElementById("rootnote");
let chordSelection = document.getElementById("chord-selection");
let minor = document.getElementById("minor");

chordSelection.addEventListener("click", (e) => {
    let chordType = e.target.id;
    console.log(chordType);
    return chordType;
});

// # define an octave
octave = 12;
root = 0;

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

// turn letters to numbers
function digitize_note(root) {
    return root_notes.get(root, 0);
};

// inverse list of notes 
let reversed_root_notes = {};

for (let key in root_notes) {
    let value = root_notes[key];
    reversed_root_notes[value] = key;
};

// return numbers to letters
function letterize_digit(digit) {
   return reversed_root_notes[digit];
};

// wait for DOM to load
window.onload = function() {
    console.log("DOM loaded.");
    // calculate intervals
    var chord = makeChord(root);
    console.log(chord)
    console.log(Array.isArray(chord))
    // draw chord
    drawChord(chord);
};

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

// define chords

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
    }
} 

const chord = chordFunctions[chordType] ? chordFunctions[chordType] : undefined;

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


// request.form.get('rootnote', "C")