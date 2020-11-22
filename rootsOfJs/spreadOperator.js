function spreadingAnArray() {
  const array = ["Hello", "World"];
  // an array spread
  console.log(...array);
}

function spreadingMultipleParams() {
  function spreadArgs(arg1, arg2) {
    console.log(arg1, arg2);
  }

  const array = ["Hello", "World"];

  // spreads an array or arguments to parameters
  spreadArgs(...array);
}

function forLoopIter() {
  const text = "It is going to rain";

  for (let char of text) {
    console.log(char);
  }
}

function mergingArrays() {
  const array1 = ["Hello"];
  const array2 = ["World"];

  const newArray = [...array1, ...array2];
  console.log(newArray);
}

// mergingArrays();

function iteratingString() {
  const greeting = "Hello World";
  console.log([...greeting]);
}

// You may have noticed a nuanced shift that occurred in this discussion. We started by talking about consuming iterators, but then switched to talking about iterating over iterables. The iteration-consumption protocol expects an iterable, but the reason we can provide a direct iterator is that an iterator is just an iterable of itself! When creating an iterator instance from an existing iterator, the iterator itself is returned.

function mapIteration() {
  let buttons = new Map();
  buttons.set("key1", "button1");
  buttons.set("key2", "button2");

  // [key, value] - array distracturing since we are iterating through a tuple of arrays
  for (let [key, value] of buttons) {
    console.log(`${key} -- ${value}`);
  }

  for (let key of buttons.keys()) {
    console.log(`Key -- ${key}`);
  }

  for (let value of buttons.values()) {
    console.log(`Value -- ${value}`);
  }

  // the same as the first loop (entries() - returns a default map iterator.)
  for (let [key, value] of buttons.entries()) {
    console.log(`Key - ${key}, Value - ${value}`);
  }
}

mapIteration();
