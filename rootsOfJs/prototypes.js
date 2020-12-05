// similar to OOP inheritance but works with objects and inherits properties without passing them to a constructor.

// basically an object has a property called prototype which links it with its parent
// it allows an object to delegate some functionalities that it hasn't implemented, to handle to its parent
// this is also called prototypical inheritence.
// its default prototype linkage connects to the Object.prototype object.
let obj = { test: "hello" };
console.log(obj.toString());

let objectA = {
  propertyA: "hello, I am object A!",
};

let objectB = Object.create(objectA);
console.log(objectB.propertyA);

// pure object

let pureObj = Object.create(null);

// this keywork also supports a dynamic context

let tiger = {
  eat() {
    console.log(`It is time to eat some ${this.food}`);
  },
};

let mutedTiger = Object.create(tiger);

mutedTiger.food = "sausages";

mutedTiger.eat();
