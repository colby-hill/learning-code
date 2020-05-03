// magic 8 ball program
//april 30th 2020


let num = Math.floor((Math.random() * 5))

switch (num) {

case 1:
console.log('Not a chance!')
break;

case 2:
console.log('As I see it? Yes.')
break;

case 3:
console.log('Better not tell you now..')
break;

case 4:
console.log('It is certain')
break;

default:
console.log('Don\'t count on it')
break;

}