//removes the first and last character of a string (way to complicated)
//may 1st 2020

function removeChar(str){
 
 let strin = []
 
 for (let i = 0; i < str.length; i++) {
   strin.push(str[i])
 }
  
  strin.pop();
  strin.shift([0]);
  let theStrin = strin.toString();
  
  const re = new RegExp(/,/gi);

  newStrin = theStrin.replace(re, '');

  return newStrin;

};

removeChar('Hello');

