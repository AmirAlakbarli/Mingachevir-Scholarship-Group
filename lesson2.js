// GCD -> EBOB
// LCM -> EKOB

// 24, 18
// 24 = 2*2*2*3
// 18 = 2*3*3
// GCD (24, 18) = 2*3 = 6
// LCM(24, 18) = 24*3=72
// LCM = (a*b)/GCD
// (2*2*2*3)*(2*3*3)/2*3 = 24*3

//! Problem 2 solution
function GCD(a, b) {
  // let littleNum = a > b ? b : a; //* if a > b then return b, else return a
  // let bigNum = a > b ? a : b; //* if a > b then return a, else return b
  let littleNum, bigNum;
  if (a > b) {
    bigNum = a;
    littleNum = b;
  } else {
    bigNum = b;
    littleNum = a;
  }

  let res = littleNum;

  while (res > 1 && (bigNum % res != 0 || littleNum % res != 0)) {
    res--;
  }

  return res;
}

function LCMwithGCD(a, b) {
  return (a * b) / GCD(a, b);
}

//! ternary operator a > b ? a : b
//! another solution without GCD
function LCM(a, b) {
  let bigNum = a > b ? a : b;
  let res = bigNum;
  for (let i = bigNum; i < a * b; i++) {
    // if (res % a == 0 && res % b == 0) break;
    if ((i % a) + (i % b) == 0) {
      res = i;
      break;
    }
  }
  return res;
}

console.log(LCMwithGCD(24, 18));
console.log(LCM(24, 18));

//! Problem 4 solution
function stringNumberSeperator(...args) {
  let num = "";
  let str = "";
  for (let i = 0; i < args.length; i++) {
    if (args[i] == null || args[i] == undefined) continue;
    if (args[i] == Number(args[i])) num += String(args[i]);
    else str += args[i];
  }
  return num + ", " + str;
}

console.log(
  stringNumberSeperator("hello", "3", 14, "world", null, 25, "!", undefined)
);
