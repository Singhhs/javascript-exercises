const reverseString = function(str) {
    let newReverseStr  = "";  
    for (i = str.length - 1; i >= 0; i--){
      newReverseStr += str[i] }
      return newReverseStr
  }

module.exports = reverseString
