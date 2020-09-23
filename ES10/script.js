// flat() array method that allows us to make multi-dimensional into a flat one

const array = [[1, 2, [123]]];
// we pass a number of layers we want flat in a dlat function
console.log(array.flat(2));

let arr1 = [1, 2, 3, 4];

arr1.map((x) => [x * 2]);
// [[2], [4], [6], [8]]

arr1.flatMap((x) => [x * 2]);
// [2, 4, 6, 8]

const str = "    hellow";

console.log(str.trimStart());

let usernames = [
  ["dima", 23],
  ["john", 24],
];

usernames = Object.fromEntries(usernames);
console.log(usernames);
// entries is kinda a reverse method for fromEntries
usernames = Object.entries(usernames);
console.log(usernames);

try {
  bob + "hi";
} catch (err) {
  console.log("you messed up " + err);
}

