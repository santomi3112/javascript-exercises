/**
 * Repeats a given string a specified number of times.
 *
 * @param {string} str - The string to be repeated.
 * @param {number} num - The number of times the string should be repeated.
 * @returns {string} The repeated string, or an error message if the input is invalid.
 */
const repeatString = function (str, num) {
  // Validate input types
  if (typeof str !== 'string') {
    throw new TypeError('Input must be a string');
  }

  if (!Number.isInteger(num) || num < 0) {
    return 'ERROR';
  }

  // Handle edge cases
  if (num === 0) {
    return '';
  }

  // Repeat the string
  let result = '';
  for (let i = 0; i < num; i++) {
    result += str;
  }

  return result;
};

// Do not edit below this line
module.exports = repeatString;
