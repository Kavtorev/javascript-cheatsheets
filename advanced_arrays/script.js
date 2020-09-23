// map, filter and reduce

const numArray = [1, 2, 3, 10];

// Important: map expects a callback function to return a value
// Create a new array (doesn't mutate a data)
// map is create example of a pure function - doesn't have any side affects / is excepted to return the same result, with the same input.
const doubleArray = numArray.map((num) => num ** 2);
console.log(doubleArray);

//Remember: a pure function doesn't return 'undefined' value
// filter
const filteredArray = numArray.filter((num) => {
  return num > 5;
});

console.log(filteredArray);

// reduce
// accumulator is a value which everything starts from in a reduce function and will be modified depending on the value callback function returns. Its value is stored after each modification (if there is any and in a new iteration will be used with the stored value)
// can be useful to calculate the sum of nums in an array or to concat. dimensional array
// the returned value by the reduce will the value of an accumulator
const reduceArray = numArray.reduce((accumulator, num) => {
  return num;
}, 0);
console.log("reduce", reduceArray);
