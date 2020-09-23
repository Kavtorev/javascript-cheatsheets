// let + const new to ECMAScript 6

const player = "bobby";
let exp = 100;
let wizardLevel = false;

if (exp > 90) {
  let wizardLevel = true;
}

const obj = {
  name: "Dmytro",
  age: 100,
};

//Destructuring
const { name, age } = obj;

//Object properties

const name2 = "john snow";

const object = {
  [name2]: "hello", //'john snow'
  [1 + 2]: "hih", // 3
};

const a = 'Simon'
const b = true
const c = {}
//useful whenever we want to have our names of attributes the same as the variable one
const object1 = {
    a, b, c
}

// console.log(object1['a'])

//Template Strings
const num  = 10
const firstName = 'Sally'
const greetingBest = `${firstName} ${num + 5} ${true}`
// console.log(greetingBest)

//default arguments
function foo (default1='', age=30){
    return `${default1} ${age}`
}

//'Symbol' datatype

let sym1 = Symbol()


//arrow function

//the old way

function add(a, b){
    return a + b;
}


//the new way

const add2 = (a, b) => {
    return a + b
};

const add1 = (a, b) => a + b;

// console.log(add1(1,2))


//Closures

const first = () =>{
    const variable = 5;
    const second = () => {
        const name = 'body';
    }
    return second
}

const second = first()
// console.log(second.name)

//Currying
//Modification of a function
const multiply = (a, b) => a * b;
const curriedMultiply = (a) => (b) => a * b
const multiplyBy5 = curriedMultiply(5)(10);
console.log(multiplyBy5)


//Compose (sition)
//A way to nest functions (math concept actually)
const compose = (f, g) => (a) => f(g(a))
const sum = (num) => num + 1
console.log(compose(sum, sum)(5))

//Avoiding side effects and functional purity;
//avoiding side effects means not effecting the outside world of a function, the idea is to treat function as its own universe which is isolated and doesn't harm the outside world

//Function purity - means no matter waht we put into a function it will always return the same value

// //What are the two elements of a pure function?
// 1. Deterministic --> always produces the same results given the same inputs 
// 2. No Side Effects -->  It does not depend on any state, or data, change during a program’s execution. It must only depend on its input elements.