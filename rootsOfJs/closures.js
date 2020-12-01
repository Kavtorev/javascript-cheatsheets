// Closure is when a function remembers and continues to access variables from outside of its scope, even when if the function is executed in a different scope

function testingClosures() {
  function wrapper() {
    // incrementByOne will remember about counter variable
    let counter = 0;
    return function incrementByOne() {
      counter++;
      console.log("Current counter is: ", counter);
    };
  }

  let incrementingStuff = wrapper();
  incrementingStuff();
  incrementingStuff();
}

// another closure example

function newClosureExample() {
  let counter = 0;
  return function closureLol(incrementNumber = 0) {
    counter += incrementNumber;
    console.log(counter);
  };
}

// the coolest closure example i've ever seen:

function coolestExample() {
  const buttons = document.getElementsByTagName("button");

  // i is blocked scoped
  // That inner function closes over idx, preserving it for as long as the click handler is set on the btn.
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function closureClick() {
      console.log("And the remembered value is...", i);
    });
  }
}

coolestExample();
