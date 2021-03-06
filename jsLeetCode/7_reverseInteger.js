var reverse = function (x) {
  var reverseInt = String(Math.abs(x)).split("").reverse().join("");
  if (reverseInt > 0x7fffffff) {
    return 0;
  }

  return reverseInt > 0x7fffffff ? 0 : x < 0 ? -reverseInt : reverseInt;
};

function reverse(n) {
  var reverseN = 0;
  var sign = n < 0;
  n = Math.abs(n);
  while (n) {
    reverseN = reverseN * 10 + (n % 10);
    n = Math.floor(n / 10);
  }
  return reverseN > 0x7fffffff ? 0 : sign ? -reverseN : reverseN;
}

console.log(reverse(23));
