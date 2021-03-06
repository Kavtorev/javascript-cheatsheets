function Classroom() {
  // ..
}

Classroom.prototype.welcome = function hello() {
  console.log("Welcome, students!");
};

var mathClass = new Classroom();

mathClass.welcome();
// Welcome, students

// All functions by default reference an empty object at a property named 'prototype'. Despite the confusing naming, this is not the function's prototype (where the function is prototype linked to), but rather the prototype object to link to when other objects are created by calling the function with new.

// This "prototypal class" pattern is now strongly discouraged, in favor of using ES6's class mechanism
