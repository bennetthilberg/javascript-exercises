function sumAll(num1, num2) {
  let numLo;
  let numHi;

    if (typeof num1 != "number" || typeof num2 != "number" || num1 < 0 || num2 < 0) {
    return "ERROR";
  } else if (num1 > num2) {
    numLo = num2;
    numHi = num1;
  } else if (num2 > num1) {
    numLo = num1;
    numHi = num2;
  } else {
    return "ERROR";
  }

  let addends = [];
  for(i = numLo; i <= numHi; i++){
    addends.push(i);
  }
  let sum = 0;
  for(const addend of addends){
    sum += addend;
  }
  return sum;
}

// Do not edit below this line
module.exports = sumAll;
