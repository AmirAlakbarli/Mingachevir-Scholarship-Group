//* 'a', '\n', '1', '#' -> char

//! Each character in the ASCII table corresponds to a number.  (encoding process)
//* for example 'A' corresponds to 65 in ASCII table

// let a = 1;
// if (a == "1") {
//   console.log("a equal 1");
// } else {
//   console.log("a not equal 1");
// }

//! Code written scratch with variable to sum
// let a1 = 1;
// let a2 = 2;
// let a3 = 3;

// let sum = a1 + a2 + a3;
// console.log(sum);

//! It is very easy to sum of many number with loop
//* Kind of loop -> While, do while, for

// let a = 1;
// while (a == 1) {
//     console.log("this is true");
//     break;
// }

//! increment in while
// let sum = 0;
// let init = 0;
// while (++init <= 10) {
//   sum += init ;
// }
// console.log(sum);

//! example of do-while loop
// let a = 1;
// do {
//   console.log(a);
// } while (a < 0);

//! example of for loop
// let sum = 0;
// for (let num = 0; num <= 10; num++) {
//   sum += num;
// }
// console.log(sum);

//! task
function addOdd(num) {
  let res = "";
  for (let i = 1; i < num; i += 2) {
    res += i + " ";
  }
  return res;
}

console.log(addOdd(20));
