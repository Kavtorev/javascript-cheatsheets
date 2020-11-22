// block scope
import functionWithPrivateVariables from "./library";

// let objectFunc = functionWithPrivateVariables();

console.dir(objectFunc);

class Test {
  constructor() {}

  blockScope() {
    for (var i = 1; i < 6; i++) {
      console.log(i);
    }

    console.log(i);
  }

  functionsAsValues() {
    return {
      greeting() {
        console.log("Greeting function!");
      },
      helloWorld() {
        console.log("another hello world function");
      },
    };
  }
}

class WayToPassParams {
  constructor(name, lastname, age) {
    this.name = name;
    this.lastname = lastname;
    this.age = age;
  }

  print() {
    console.log(`${this.name} ${this.lastname} ${this.age}`);
  }
}

// let test = new Test();
// const func = test.functionsAsValues();
// console.log(func.greeting());

// const person = new WayToPassParams("Dima", "Kavtorev", 19);
