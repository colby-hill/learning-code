//fucntion that returns if a number is narcissistic or not
// may 3rd 2020 (way too early in the morning (5:03 am))

function narcissistic(value) {

let sVal = value.toString()
let leng = sVal.length;
let strin = 0;

for (let i = 0; i < leng; i++) {
  strin += sVal[i] ** leng 
}

if (sVal == strin) {
  return true;
}

}

narcissistic(153)
