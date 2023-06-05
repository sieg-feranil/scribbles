// prove funzioni recursive
function factorial(x) 
{ 

  if (x === 0)
 {
    return 0;
 }
 console.log(x);
 console.log('---------');
  return x - factorial(x-1);
         
}
console.log(factorial(5));

console.log('---------');
function nand(b1, b2) {
  return !(b1 && b2)
}

function orGate(b1, b2) {
  return nand(nand(b1, b1), nand(b2, b2))
}

console.log(orGate(false,false)+'--->false,false')
console.log(orGate(false,true)+'--->false,true')
console.log(orGate(true,false)+'--->true,false')
console.log(orGate(true,true)+'--->true,true')