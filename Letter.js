// constructor function used to create letter objects
function Letter(char){
    // assigns the object the character passed in
    this.character = char;
    // checks whether the letter has been guessed
    this.guessedYet = false;

    //* A function that returns the underlying character if the letter has been guessed, or a placeholder (like an underscore) if the letter has not been guessed
    this.revealLetter = function(){
        if (this.guessedYet){
            return this.letter;
        }else{
            return "_"
        };
    };

    //* A function that takes a character as an argument and checks it against the underlying character, updating the stored boolean value to true if it was guessed correctly
    this.letterCheck = function(lett){
        if(lett === this.character){
            this.guessedYet = true;
            this.revealLetter();
        };
    };

    
};

module.exports = Letter;