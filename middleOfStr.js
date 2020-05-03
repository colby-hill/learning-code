/* function that gets the middle character of a string, if the string has an even number of characters it gets the middle two characters */
//May 3rd 2020

function getMiddle(s)
{
let result;
let sMid = s.length / 2
sMid--

if (Number.isInteger(s.length / 2)) {
  result = `${s[(sMid)]}${s[(sMid) + 1]}`
} else {
  result = `${s[Math.floor(s.length / 2)]}`
}

console.log(result)
}

getMiddle('')