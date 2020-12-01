function wrapper() {
  let counter = 0;
  //   // thisIsAClosure - is a context aware function because it refers to execution context using this.
  //   context-aware functions that are called without any context specified default the context to the global object (window in the browser).
  return function thisIsAClosure() {
    console.log(this.counter);
  };
}

// One way to think about the execution context is that it's a tangible object whose properties are made available to a function while it executes.

// Compare that to scope, which can also be thought of as an object; except, the scope object is hidden inside the JS engine, it's always the same for that function, and its properties take the form of identifier variables available inside the function

// execution context object:
let homework = {
  comment: "mb later",
  start: function () {
    console.log(this.comment);
  },
};

homework.start(); // invoking a start function and a start function is a context aware function, its execution context is a homework object

// we copy a reference to a function and invoke it inside a global scope, so we get the result of undefined because there is no comment variable a global scope
b = homework.start;

// another way to invoke context aware function

let objectWithText = {
  comment: "I will do that!",
};

function starthomework() {
  console.log(this.comment);
}

// we use objectWithText to set the 'this' reference for the function call

// The benefit of this-aware functions—and their dynamic context—is the ability to more flexibly re-use a single function with data from different objects

// A function that closes over a scope can never reference a different scope or set of variables. But a function that has dynamic this context awareness can be quite helpful for certain tasks.
starthomework.call(objectWithText);
