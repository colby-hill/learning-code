//a program that takes a string input and counts the vowels that are in the string
//may 1 2020

function getCount(str) {
  let vowelsCount = 0;

  let vowel = ['a', 'e', 'i', 'o', 'u']
  
  for (let i = 0; i < str.length; i++) {
    for (let n = 0; n < vowel.length; n++) {
      if (str[i] === vowel[n]) {
        vowelsCount++
      } 
    }
  }
  
return vowelsCount;

}

getCount('poopers and doopers');