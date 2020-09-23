// reference type
// Objects are reference types

// strings, numbers, booleans, undefined, null, Symbols - are primitive data types

const object1 = { value: 10 };
const object2 = object1;
const object3 = { value: 10 };

// context vs scope

// Context ( 'this' keyword) points to an object in whom environment we are in.
// Comparing 'this' with a 'window' object will return us true, because we are within its environment
// on other words - 'this' refers to an object it is inside of.
console.log(this === window); // true

function a() {
  console.log(this); // output will be 'window', because technically a() is method of a window object
}

// Another environment, another output

const object4 = {
  a: function () {
    console.log(this);
  },
};

// instantiation of an object (classes)

class Player {
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }

  introduce() {
    console.log(`Hi I am ${this.name}`);
  }
}

class Wizard extends Player {
  constructor(name, type) {
    super(name, type);
  }

  play() {
    console.log(`weeeee I ${this.type}`);
  }
}

const wizard1 = new Wizard("Shelly", "Healer");

wizard1.introduce();

// Pass by reference vs pass by value:

// Primitive types are immutable which means in order to change them we have to remove from memory and existing value and create a new one

let primitive = 5;
// a is passed by value, cuz it is primitive (it was predefined by the programming language)
let b = primitive;

b++;
console.log(primitive);

// objects or reference data types which are created by the user are passed by reference

// whenever we pass by reference we actually save space in memory, because we are not copying and not allocating a new memory space

// a similar situation with arrays which are also objects

const array = [1, 2, 3];
let arrayCopyByReference = array;

arrayCopyByReference.push(1234);
console.log(array);

//but if want to avoid assigning a reference we could use concat method

arrayCopyByReference = [].concat(array);

// Copying custon objects:

let obj = { a: "a", b: "b" };
//two args, obj and source
let clone = Object.assign({}, obj);

//another way
let clone2 = { ...obj }; // a new feature in JS
console.log((clone.a = 10));
console.log(obj);

// shallow cloning - is a cloning of the first level of an object

let deepObject = { a: "1", deep: { inside: "deep" } };

let cloneDeep = { ...deepObject };


// cloneDeep.deep.inside = "changed";
// the way to do a deep cloning:
//first we convert our object into a string in order to let parser to convert transform it to the cloned object
// ** it can be time  consuming to clone a huge object
let superClone = JSON.parse(JSON.stringify(deepObject))
deepObject.deep.inside = 'hehehe'
console.log(superClone.deep.inside)

