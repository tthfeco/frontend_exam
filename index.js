// Task: Reverse Words in a Sentence
// Write a function `reverseWords(sentence)` that takes a sentence as input and returns the sentence with the order of the words reversed.
// The words in the sentence should retain their original character order, but the sequence of words in the sentence should be reversed.

// Constraints:
// - Words are separated by spaces, and the sentence may contain leading or trailing spaces.
// - Consider only spaces as word separators (no punctuation splitting).
export function reverseWords(sentence) {
  const words = sentence.trim().split(' ');
  let wordsNoSpaces = [];

  if (sentence === '') {
    return '';
  }

  for (const word of words) {
    if (word !== '') {
      wordsNoSpaces.push(word)
    }
  }

  const reverseWords = wordsNoSpaces.reverse();

  return reverseWords.join(' ');
}

// Task: Word Frequency Counter
// Given a string of text, write a function `wordFrequency` that counts the
// frequency of each unique word in the text. The function should return an
// object where the keys are the unique words and the values are the counts
// of each word. The comparison of words should be case-insensitive.

// Additional instructions:
// - Words are separated by spaces, and the text may contain punctuation.
// - The function should not count punctuation as part of the words.
// - Return the result with words in lowercase.
export function wordFrequency(text) {

  const words = text.toLowerCase().replace(/[!,']/g, '').split(' ');
  let result = {};

  if (text === '') {
    return {};
  }

  let wordsNoSpaces = [];

  for (const word of words) {
    if (word !== '') {
      wordsNoSpaces.push(word)
    }
  }

  for (const word of wordsNoSpaces) {
    if (!result.hasOwnProperty(word)) {
      result[word] = 1;
    } else {
      result[word]++
    }
  }
  return result;
}

// Task: Top N Frequent Words
// Write a function `topNFrequentWords(text, n)` that finds the top `n` most frequent words in a given text.
// The function should return an array of tuples where each tuple contains a word and its frequency,
// sorted in descending order of frequency. If two words have the same frequency, they should be sorted alphabetically.

// Constraints:
// - Text is case-insensitive.
// - Words are separated by spaces, and the text may contain punctuation.
// - Ignore punctuation, and consider only alphabetic characters for word separation.
export function topNFrequentWords(text, n) {
  text = text.toLowerCase().replace(/[!,.']/g, '');
  const words = text.split(' ');

  if (text === ''){
    return '';
  }

  let result = [];

  let countedWords = {};

  for (const word of words) {
    if (!countedWords.hasOwnProperty(word)) {
      countedWords[word] = 1;
    } else {
      countedWords[word]++
    }
  }

  for (const word in countedWords){
    result.push(word);
    result.push(countedWords[word])
  }

  return result;
}

console.log(topNFrequentWords('This is a test. This is only a test.'));
