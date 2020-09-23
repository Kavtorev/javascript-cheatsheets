const array = [1000, 20000, 3, 100, 99, 2, 99];

console.log(biggestNumberInArray(array));

function biggestNumberInArray(arr) {
  let highest = 0
  arr.forEach(element => {
      if (element > highest){
          highest = element
      }
  });
  return highest;
}

const array2 = ["a", 3, 4, 2]; // should return 4

function biggestNumberInArray2(arr) {
  let highest = 0;
  for (item of arr){
      if (item > highest){
          highest = item
      }
  }

  return highest;
}

const array3 = []

function biggestNumberInArray3(arr) {
    let highest = 0;
    for (let i = 0; i < arr.length; i++){
        if (arr[i] > highest){
            highest = arr[i]
        }
    }
    return highest
}



console.log('array2: ', biggestNumberInArray2(array2))
console.log('array3:', biggestNumberInArray3(array3))

amazonBasket = {
    glasses: 1,
    books: 2,
    floss: 100
}

function checkBasket(basket, lookingFor){
    for (key in basket){
        debugger;
        if (lookingFor === key){
            return true
        }
    }
    return false
}

console.log(checkBasket(amazonBasket, 'glasses'));