//! Problem 1 solution
//* this function gets count of digits after point in number
function countDecimalPlaces(num) {
  const decimalPart = num.toString().split(".")[1];
  return decimalPart ? decimalPart.length : 0;
}

//* this function gets max count of digits after point in two numbers
function maxDecimalPlaces(num1, num2) {
  const decimalPlaces1 = countDecimalPlaces(num1);
  const decimalPlaces2 = countDecimalPlaces(num2);
  return decimalPlaces1 > decimalPlaces2 ? decimalPlaces1 : decimalPlaces2;
}

function sum(...args) {
  let res = 0;

  //* this loop sums all numbers and finds the max count of digits after point
  for (let i = 0; i < args.length; i++) {
    const decimalPlaces = maxDecimalPlaces(res, args[i]);
    res += args[i];
    res.toFixed(decimalPlaces);
  }

  return res;
}
console.log(`sum(1.1, 2.2, 3.3) = ${sum(1.1, 2.2, 3.3)}`);

//! Problem 5 solutions

//* solution 1
let nums = [10, 22, 43, 40, 5];
let res = [];

for (let i = 0; i < nums.length-1; i++) res.push(nums[i]);

res.unshift(nums[nums.length - 1]);
console.log(`res = ${res}`);


//* solution 2
nums = [10, 22, 43, 40, 5];
let length = nums.length;
res = Array(length);

for (let i = 0; i < length; i++) res[(i + 1) % length] = nums[i];

console.log(`res = ${res}`);


//* solution 3
nums = [10, 22, 43, 40, 5];
let temp = nums[0];

for (let i = 0; i < nums.length - 1; i++) {
  let innerTemp = nums[i + 1];
  nums[i + 1] = temp;
  temp = innerTemp;
}

nums[0] = temp;
console.log(`nums = ${nums}`);


//* solution 4
nums = [10, 22, 43, 40, 5];
temp = nums[0];

for (let i = 1; i < nums.length; i++) {
  temp = nums[i] + temp;
  nums[i] = temp - nums[i];
  temp = temp - nums[i];
}

nums[0] = temp;
console.log(`nums = ${nums}`);


//* solution 5
nums = [10, 22, 43, 40, 5];

for (let i = nums.length - 1; i > 0; i--) {
  nums[i] = nums[i] + nums[i - 1];
  nums[i - 1] = nums[i] - nums[i - 1];
  nums[i] = nums[i] - nums[i - 1];
}

console.log(`nums = ${nums}`);


//* solution 6
nums = [10, 22, 43, 40, 5];
let last = nums[nums.length - 1];

for (let i = nums.length - 1; i > 0; i--) nums[i] = nums[i - 1];

nums[0] = last;
console.log(`nums = ${nums}`);


//* solution 7
nums = [10, 22, 43, 40, 5];
let temp1 = nums[0];

for (let i = nums.length % 2; i < nums.length; i += 2) {
  temp1 = nums[i] + nums[i + 1] + temp1;
  nums[i] = temp1 - nums[i] - nums[i + 1];
  nums[i + 1] = temp1 - nums[i] - nums[i + 1];
  temp1 = temp1 - nums[i] - nums[i + 1];
}

nums[0] = temp1;
console.log(`nums = ${nums}`);


//* solution 8
nums = [10, 22, 43, 40, 5];
nums = nums.slice(-1).concat(nums.slice(0, nums.length - 1));

console.log(`nums = ${nums}`);


//* solution 9
nums = [10, 22, 43, 40, 5];
nums.unshift(nums.pop());
console.log(`nums = ${nums}`);


//! Problem 6 solution
nums = [4, -2, 0, 3, 8, 10, -7, 2, 5, -6, 9, 1];

for (let i = 0; i < nums.length; i++) {
  nums[i] = nums[i] + (Math.abs(nums[i]) + nums[i]) / nums[i];
}

console.log(`nums = ${nums}`);

// todo: This gives an NaN because of dividing by zero (if the array contains 0). Please try to fix it for the next lesson.
