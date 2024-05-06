# README

ToneMap is a piano chord/ music theory reference cheatsheet -- for fans and newcomers alike! Whether you're an expert around these parts or exploring these soundscapes for the very first time, I hope we can help you keep from getting lost!

## Table of Contents

- [Usage](#usage)
- [Support](#support)
- [Contributing](#contributing) 

## Usage

Current versions of ToneMap run entirely on the web, but mobile versions for ios and android are planned for development in the future. 

### Getting started
To start exploring with ToneMap, click a note on the keyboard. The program will automatically calculate the notes at the intervals that make up that note's major triad, and also display the formula used to make that chord. Selecting a chord first will default the rootnote to C, and build the shape you selected. 

### I’m actually totally lost/ what is going on here?
ToneMap calculates the intervals of the notes that make up a given chord according to their tonal relationships, then displays them in order to help visualize the tonal relationships between each note. It shows off that many chords actually share a lot of notes, and can be “spelled” the same, yet have a different name! Still confused? Here’s a short glossary for the uninitiated:

#### Vocabulary

**Root**
the note we are building the rest of the notes off of! we can think of this as home base, or the parent of all the harmonic babies

**Interval**
a name for the note at a distance from a (root) note, that also describes the relationship between the two. stacking multiple above a root makes a chord!

**Chord**
a structure made of a collection of 3 or more musical notes at certain intervals.

**Triad**
the “cookie cutter” chord. most chords are built around this basic structure: a root note, a major third, and a perfect fifth. You can build a minor chord by using a minor third in place of the major third

### Intervals

| INTERVAL    | DISTANCE    |
-----------------------------
| 2nd         | 2 semitones |
| Minor 3rd   | 3 semitones |
| Major 3rd   | 4 semitones |
| 4th         | 5 semitones |
| 5th         | 7 semitones |
| 6th         | 6 semitones |
| 7th         | 10 semitones|
| major 7th   | 11 semitones|
| ninth       | octave + 2nd|
| eleventh    | octave + 4th|
| thirteenth  | octave + 6th|

##### Other intervals

**Augmented**
the value of a perfect interval raised by one semitone

**Diminished**
the value of a perfect interval lowered by one semitone

## Change inversion
A lot of piano chords can be played in one octave, but once you add enough color, chord shapes can become quite dense. For this reason, ToneMap allows you to invert the spelling of the currently selected chord. Just hit the invert button and watch the magic happen! Chords will wrap infinitely across 2 octaves, effectively allowing reference to infinite inversions. In the event no chord or root has been selected, the program defaults to C Major. Not familiar with the concept? Start [here](https://en.wikipedia.org/wiki/Inversion_(music)). 

## Sign up for the newsletter
Interested in hearing about updates to ToneMap/ what else we have going on? Just leave a name, an email address, and let us know what you want to hear about and we'll add you to the list! 

## Support

Please [open an issue](https://github.com/elokthewizard/cs50x-final/issues/new) for support.

## Contributing

Please contribute using [Github Flow](https://guides.github.com/introduction/flow/). Create a branch, add commits, and [open a pull request](https://github.com/elokthewizard/cs50x-final/compare/).

## License

Copyright (c) 2024 Future Throwback, elok2000

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.