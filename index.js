const rotate = require('arr-rotate');
const _ = require('lodash');

const DICT = 'abcdefghijklmnopqrstuvwxyz'.split('');

function stateForWord(word) {
  const letters = word.toLowerCase().split('');
  const baseRotation = DICT.indexOf(letters[0]);
  const state = [
    computeRotation(baseRotation, letters[1]),
    computeRotation(baseRotation, letters[2]),
    computeRotation(baseRotation, letters[3])
  ];

  return state;
}

function computeRotation(baseRotation, letter) {
  const rotation = ((26 - DICT.indexOf(letter)) % 26) + baseRotation;

  return rotation;
}

function wheelFromState(state) {
  let rows = [[], [], [], []];

  rows[0] = DICT;
  rows[1] = rotate(DICT, state[0]);
  rows[2] = rotate(DICT, state[1]);
  rows[3] = rotate(DICT, state[2]);

  return rows;
}

function wordsFromWheel(wheel) {
  let words = _.unzip(wheel);
  words = words.map(word => word.join('').toUpperCase());

  return words;
}

function wordsFromWord(word) {
  const state = stateForWord(word);
  const wheel = wheelFromState(state);
  const words = wordsFromWheel(wheel);

  return words;
}

const WordWheel = {
  stateForWord,
  wheelFromState,
  wordsFromWheel,
  wordsFromWord,
}

module.exports = WordWheel;

