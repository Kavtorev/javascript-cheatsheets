// Runtime: 220 ms, faster than 61.39% of JavaScript online submissions for Palindrome Number.
// Memory Usage: 48.8 MB, less than 43.22% of JavaScript online submissions for Palindrome Number.

// var isPalindrome = function (x) {
//   let sign = x > 0;

//   if (!sign && x) {
//     return false;
//   }

//   let givenInteger = x;
//   let reversedInteger = 0;
//   while (x) {
//     reversedInteger = reversedInteger * 10 + (x % 10);
//     x = Math.floor(x / 10);
//   }
//   return reversedInteger > 0x7fffffff
//     ? false
//     : reversedInteger === givenInteger;
// };

// console.log(isPalindrome(-11));

var isPalindrome = function (x) {
  // if the last digit of the number is 0, in order to be a palindrome,
  // the first digit of the number also needs to be 0.
  // Only 0 satisfy this property.

  if (x < 0 || (x % 10 == 0 && x != 0)) {
    return false;
  }

  let revNm = 0;

  // the reverse of the last half of the palindrome should be the same as the first half of the number, if the number is a palindrome
  while (x > revNm) {
    revNm = revNm * 10 + (x % 10);
    x = Math.floor(x / 10);
  }

  // since the middle digit doesn't make much sense for us, we get rid of it: // x === Math.floor(revNm / 10)
  return x === revNm || x === Math.floor(revNm / 10);
};

console.log(isPalindrome(0));
