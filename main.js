

/**
 * Functional Iterators
 */

// ************* forEach *************************

var fruits = ['apple', 'orange', 'pear', 'plum'];
var numbers = [1, 2, 3, 4, 5, 6];
var cars = ['honda', 'ford', 'tesla'];

// Demo Function

// My forEach utility function can loop over any array it's given
// and then call the provided function (called a callback function)
function forEach(array, callback){
  for(var i=0; i < array.length; i++){
    callback(array[i], i, array);
  }
}

// A callback function that will console.log any number multiplied by 2
function multiplyByTwo(number){
  // console.log(index);
  console.log(number * 2);
}

// Here I'm calling my forEach function and passing an array and multiplyByTwo
forEach(numbers, multiplyByTwo);

// I can call my function with a functional iterator
forEach(cars, function(car, index){
  var favNum = index + 1;
  console.log('#' + favNum, car);
});

// I can use the array item, index, and original array
// in my callback function
forEach(fruits, function(fruit, index, array){
  if(fruit !== 'pear' && array[index + 1] !== 'pear'){
    console.log('I like', fruit + 's');
  }
});


// Haazah!!! It's built in!!

fruits.forEach(function(fruit, index, array){
  if(fruit !== 'pear' && array[index + 1] !== 'pear'){
    console.log('I like', fruit + 's');
  }
});

// ************* map *************************

var cars = ['honda', 'ford', 'tesla'];

// Demo Function

// My map utility function can loop over any array it's given
// and then call the provided function (called a callback function).
// But unlike forEach, this function will return a mutated array.
function map(array, callback){
  var newArray = [];

  for(var i=0; i < array.length; i++){
    newArray.push(callback(array[i], i, array));
  }

  return newArray;
}

// I call my map function with an array of makes and convert it to an array
// of models. The callback function returns the correct value.
var models = map(cars, function(car){
  if(car == 'honda'){
    return 'civic';
  }

  if(car == 'ford'){
    return 'focus';
  }

  if(car == 'tesla'){
    return '85D';
  }
});

console.log(models);

// Haazah!!! It's built in!!


var groceryPrices = [1.5, 11.25, 3.16];

var printFriendlyAmounts = groceryPrices.map(function(amount){
  return '$' + amount.toFixed(2);
});

console.log(printFriendlyAmounts);

// ************* reduce *************************

var groceryPrices = [1.5, 11.25, 3.16];

// Demo Function

// My reduce utility function can loop over any array it's given
// and then reduce all the values to a singal value.
// To reduce an array we need an accumulator.
function reduce(array, callback, starter){
  var accumulator = starter ? starter : array[0];
  var index = starter ? 0 : 1;

  for(var i = index; i < array.length; i++){
    accumulator = callback(accumulator, array[i], i, array);
  }

  return accumulator;
}

// As you've guessed... it's built in!!

var sum = groceryPrices.reduce(function(subtotal, price){
  return subtotal + price;
});

console.log(sum);


// ************* Now it's your turn *************************

// console.log each item in the array using the .forEach
// funcitonal iterator
var clothing = ['hat', 'shirt', 'shoes'];


clothing.forEach(function(clothingItem){
  console.log(clothingItem);
});

// console.log a new array that has each item
// capitalized
var clothing = ['hat', 'shirt', 'shoes'];

var newClothing = clothing.map(function(item){
  return item.charAt(0).toUpperCase() + item.slice(1);
});

console.log(newClothing);


/*
 * Assignment Questions
 */

// 3. --------------------------------------------

// The code below will log the letter twice. What
// is the order that will be logged?
//
// [a]: x then y then z
// [b]: y then z
// [c]: z then y
// [d]: x then z

// Please explain your answer.

var letter = "x";

setTimeout(function(){
  letter = "y";
  console.log("The letter is", letter);
}, 0);

letter = "z";
console.log("The letter is", letter);
