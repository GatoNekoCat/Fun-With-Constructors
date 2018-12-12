// bring in the Letter.js module with require 
const Letter = require('./Letter.js')

// constructor takes in a word
function Word(word){

    // word is the word haven't you heard
    this.word = word;

    // take the letters from the word
    this.wordLetters = word.split("");

    // Array for letters
    this.lettersArray = [];

    // Use Letter to create letter objects
    this.LetterToObj = function(){
        for(var i; i < this.wordLetters.length;i++){
            var letterObj = new Letter (this.wordLetters[i]);
            this.lettersArray.push(letterObj);
        };
    };
    this.displayStr = function(){
        

    };

}