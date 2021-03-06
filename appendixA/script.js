// If you assign/pass a value itself, the value is copied.

const str = "John";
// str value is copied
const new_str = str;

// In JS, only object values (arrays, objects, functions, etc.) are treated as references.

let object = {
  name: "Mark",
};

let newObj = object;
newObj.name = "Nazar";

console.log(object);

// Again, JS chooses the value-copy vs. reference-copy behavior based on the value type. Primitives are held by value, objects are held by reference. There's no way to override this in JS, in either direction.
