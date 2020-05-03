// program that tests if a word has any duplicate letters
// may 1 2020
function isIsogram(str){
  

  var strin = str.toLowerCase();
  let word = []
  let result = true;
  let inc = 0
  
  for (let i = 0; i < strin.length; i++) {
      word.push(strin[i])
  }

  for (let n = 0; n < word.length; n++) {
          if (word.indexOf(word[n]) != word.lastIndexOf(word[inc])) {
            result = false;
          } else {
            result = true;
            inc++
          }
      }
    
  return result;
  
  }


isIsogram('')
