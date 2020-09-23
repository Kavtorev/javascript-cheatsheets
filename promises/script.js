// const promise = new Promise((resolve, reject) => {
//   if (true) {
//     resolve("Good");
//   } else {
//     reject("Bad");
//   }
// });

// promise
//   .then((result) => result + "!")
//   .then((result2) => {
//     throw Error;
//     console.log(result2);
//   })
//   .catch(() => console.log("error!"));

// const promiseExercise = new Promise((resolve, reject) => {
//   let test = false;

//   if (test) {
//     resolve("Resolve state Hello");
//   } else {
//     reject("Errorororr!!!");
//   }
// });

// promiseExercise
//   .then((response) => console.log(response))
//   .catch((error) => console.log(error));

// console.log("test");

// const promise = new Promise((resolve, reject) => {console.log('success');})

Promise.resolve("success").then((response) => response);
Promise.reject("failed").then(null, (error) => error);

// const failedPromise = Promise.reject('Error')

// failedPromise.then((response) => console.log(response)).catch((error) => console.log(error))



// Promise.all(urls.map(element => {
//   fetch(element).then(response => response.json())
// })).then(response => console.log(response))

// Promise.all(urls.map(url =>
//   fetch(url).then(people => people.json())
// ))
// .then(array => {
//   console.log('1', array[0])
//   console.log('2', array[1])
//   console.log('3', array[2])
//   console.log('4', array[3])
// })
// .catch(err => console.log('ughhhh fix it!', err));

// ?If all the input promises resolve, the Promise.all() static method returns a new Promise that resolves to an array of resolved values from the input promises, in an iterator order.

// ?If one of the input promises rejects, the Promise.all() returns  a new Promise that rejects with the rejection reason from the first rejected promise. The subsequent rejections will not affect the rejection reason. The returned Promise also handles the rejections silently.



// ! response.json() will return a promise because parsing a json string may take some time

fetch("http://swapi.dev/api/people/1")
  .then((people) => people.json())
  .then((data) => data);

// *Fetch returns a Promise which resolves a Response object

console.log(fetch("http://swapi.dev/api/people/1").then((response) => console.log(response)));

// ? Remember that Promises have three states:  resolved or rejected or pending. 
// !! .then() returns a Promise, by passing callback to it we are able to access a resolved value by returning it
// ! ** then() allows to take advantage of a Promise chaining concept, 
// ! ** as I mentioned before .then() returns a Promise, when a handler (callback) returns a value it becomes a result of a Promise 
// ? .catch() allows us to catch an error which means that a promise has a rejected state

// ? Promise.all([]) - allows us to aggregate multiple async. operations and returns an iterable collection which contains resolved values of each Promise initially passed in an array. 

const urls = [
  "http://swapi.dev/api/people/1",
  "http://swapi.dev/api/people/2",
  "http://swapi.dev/api/people/3",
  "http://swapi.dev/api/people/4",
];


// Promise.all(
//   urls.map((url) => {
//     return fetch(url).then((people) => people.json());
//   })
// ).then((array) => array.concat(['new value'])).then((array) => console.log(array))


function job(state) {
  return new Promise(function(resolve, reject) {
      if (state) {
          resolve('success');
      } else {
          reject('error');
      }
  });
}

console.log(job(true));

// let promise = job(true);
// debugger;
// promise

// .then(function(data) {
//   console.log(data);

//   return job(false);
// })

// .catch(function(error) {
//   console.log(error);

//   return 'Error caught';
// })

// .then(function(data) {
//   console.log(data);

//   return job(true);
// })

// .catch(function(error) {
//   console.log(error);
// });