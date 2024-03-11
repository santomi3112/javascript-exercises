const reverseString = function(str) {
  const charArray = str.split('');

  // Reverse the array manually
  const reversedCharArray = [];
  for (let i = charArray.length - 1; i >= 0; i--) {
    reversedCharArray.push(charArray[i]);
  }

  // Join the reversed array into a string
  const reversedStr = reversedCharArray.join('');

  return reversedStr;
};

// Do not edit below this line
module.exports = reverseString;
