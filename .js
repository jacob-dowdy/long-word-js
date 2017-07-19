
function findLongestWord(str) {
  var words = str.split(' ');
  var longWord = 0;
  
  for (var i = 0; i < words.length; i++) {
    if (words[i].length > longWord) {
      longWord = words[i].length;
    }
  }
  return longWord;
}

findLongestWord("The quick brown fox jumped over the lazy dog");
