'use strict';

/**
 * Implement detectPangram function:
 *
 * A pangram is a sentence that contains every single letter of the alphabet
 * at least once. For example, the sentence "The quick brown fox jumps over
 * the lazy dog" is a pangram, because it uses the letters A-Z at least once
 * (case is irrelevant).
 * Given a string, detect whether or not it is a pangram. Return True if it
 * is, False if not. Ignore numbers and punctuation.
 *
 * @param {string} phrase
 *
 * @return {boolean}
 */
function detectPangram(phrase) {
  let count = 0;
  const phraseLetters = [];
  const charCode = 97;
  const normalizePhrase = phrase.toLowerCase();

  for (const str of normalizePhrase.split('')) {
    if (!phraseLetters.includes(str)) {
      phraseLetters.push(str);
    }
  }

  for (let i = 0; i < 26; i++) {
    for (let j = 0; j < phraseLetters.length; j++) {
      if (String.fromCharCode(charCode + i) === phraseLetters[j]) {
        count++;
      }
    }
  }

  if (count === 26) {
    return true;
  } else {
    return false;
  }
}

module.exports = detectPangram;
