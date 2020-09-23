const basket = ['apple', 'orange', 'grapes']
const detailedBasket = {
    apples: 5,
    oranges: 10,
    grapes: 1000
}
// for of (ES6)
// I guess it is used for arrays and strings**
// Iterating - going one by one and look at each item
// for (item of basket){
//     console.log(item)
// }

// for in
// works with objects
// **Important, we are not iterating through an object, we are enumerating, object are enumerable
// ***  We can't iterate through objects using 'for of' because objects are not iterable, they are enumerable.

//
// using 'for in' we are enumerating through keys of an object
for (item in detailedBasket){
    console.log(item)
}

// BUT we can actually enumerate through arrays because they are object, and their keys will be indexed:

for (item in basket){
    console.log(item)
}

