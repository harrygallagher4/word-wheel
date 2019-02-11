const _ = require('lodash');
const words = require('./words.json');
const { wordsFromWord } = require('./index.js');

const wordList = _.keys(words);

function countWordsFromWord(word) {
  const wheel = wordsFromWord(word);
  const count = wheel.map(checkWord).reduce(sum, 0);

  if (count > 1) {
    console.log(`${count}: ${word}`);
  }
}

function sum(acc, v) {
  return acc + v;
}

function checkWord(word) {
  return words[word.toLowerCase()] || 0;
}

function scan() {
  wordList.forEach(countWordsFromWord);
}

module.exports = scan;
