//returns the evaluation of a string of value1 the operation and value2
//may 1st 2020

function basicOp(operation, value1, value2)
{
  return eval((`${value1} ${operation} ${value2}`)) 
}

basicOp('-', '7', '4');