class Tests {
  constructor() {
    this.nan = NaN;
    this.string = "Hello World";
  }

  checkTypes() {
    console.log(Number.isNaN(nan));
    console.log(Object.is(nan, NaN));
  }

  getGenerator() {
    return function* generator(collection) {
      for (let i = 0; i < collection.length; i++) {
        yield collection[i];
      }
    };
  }
}

const object = new Tests();

let generator = object.getGenerator()("Hello World");

let initial = generator.next();
while (!initial.done) {
  console.log(initial.value);
  initial = generator.next();
}
