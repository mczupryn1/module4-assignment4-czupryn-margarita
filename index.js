var words = [
  'bananas',
  'grapes',
  'carousel',
  'milkshake',
  'javascript',
  'limousine',
  'chocolate',
  'programming',
  'meatloaf',
  'ukulele',
  'mango'
]
// initial setup
var wordGuess = words[Math.floor(Math.random() * words.length)];
var newWord = wordGuess.replace(/[a-z]/g, "_");
var wins = 0;
var losses = 0;
var prevWord = "";
var incorrectLetters = [];
var remainGuesses = 10;
// DOM
document.getElementById("remaining-guesses").innerHTML = remainGuesses;
document.getElementById("word-to-guess").innerHTML = newWord;
console.log(wordGuess);
console.log(newWord);
// filter keypresses
document.body.onkeyup = function (event) {
  let letter = event.key.toLowerCase();
  if (/[a-z]/g.test(letter)) {
    if (wordGuess.includes(letter)) {
      for (let i = 0; i < wordGuess.length; i++) {
        if (wordGuess[i] === letter) {
          let wordArray = newWord.split('');
          wordArray[i] = letter;
          newWord = wordArray.join('');
        }
      }
  // send new word to DOM
      document.getElementById('word-to-guess').innerHTML = newWord; 
      if (newWord === wordGuess) {
        prevWord = wordGuess;
        wordGuess = words[Math.floor(Math.random() * words.length)];
        newWord = wordGuess.replace(/[a-z]/g, "_");
        document.getElementById('word-to-guess').innerHTML = newWord;
        document.getElementById('previous-word').innerHTML = prevWord;
        remainGuesses = 10;
        document.getElementById('remaining-guesses').innerHTML = remainGuesses;
        incorrectLetters = [];
        document.getElementById('incorrect-letters').innerHTML = incorrectLetters;
        wins++
        document.getElementById('wins').innerHTML = wins;
      }
    // prevent duplicate letters
    } else if (incorrectLetters.includes(letter)) {}
    // word array
      else {
        incorrectLetters.push(letter);
        remainGuesses--;
        document.getElementById('incorrect-letters').innerHTML = incorrectLetters;
        document.getElementById('remaining-guesses').innerHTML = remainGuesses;
        if (remainGuesses === 0) {
          prevWord = wordGuess;
          wordGuess = words[Math.floor(Math.random() * words.length)];
          newWord = wordGuess.replace(/[a-z]/g, "_");
          document.getElementById('word-to-guess').innerHTML = newWord;
          document.getElementById('previous-word').innerHTML = prevWord;
          remainGuesses = 10;
          incorrectLetters = [];
          document.getElementById('remaining-guesses').innerHTML = remainGuesses;
          document.getElementById('incorrect-letters').innerHTML = incorrectLetters;
          losses++;
          document.getElementById('losses').innerHTML = losses;
       }
    }
  }
}