// ---------------------
// Define a function that takes a string and an integer of i and creates a new array of length i where each value is equal to the string passed in
// myFunction('sunshine', 3) => ['sunshine', 'sunshine', 'sunshine'];
// ---------------------

// Put your answer below -------------------------



function repeatTimes(str, i) {
  const arr = [];
  for (let j = 0; j < i; j++) {
    arr.push(str);
  };
  return arr;
};
console.log("Question 1 result:");
console.log(repeatTimes("Wolf", 66));

//Mady wrote as well:
const anotherWay = function(str, i) {
  return Array.from({
    length: i
  }, function() {
    return str;
  })
};




// -----------------------------------------------

// ---------------------
// Define a function that takes an array and reverses all the values in an array
// The function should not mutate the original array
// ---------------------

// Put your answer below -------------------------


function reverseArray(oldArray) {
  let newArray = [];
  for (let i in oldArray) {
    newArray.unshift(oldArray[i]);
  };
  return newArray;
};
const oldArray = ["a", "b", "c"];
const newArray = reverseArray(oldArray);
console.log("Question 2 result:");
console.log(`oldArray is ${oldArray}.`);
console.log(`newArray is ${newArray}.`);







// -----------------------------------------------

// ---------------------
// Define a function that takes an array and removes all falsy values from the array
// ---------------------

// Put your answer below -------------------------


const mightHaveFalsy = ["Millinocket", "", 0, "Bleep", false, 2, undefined];

function removeFalsy(oldArray) {
  const newArray = [];
  for (let i of oldArray) {
    // console.log('i', i);
    if (i) { // if i is true. Explanation: It's just "wat". JavaScript coersion is weird. Generally you need to test falsy values for truth, not for falsehood. Further explanation: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness
      newArray.push(i);
    };
  };
  return newArray;
};
console.log("Question 3 result:");
console.log(removeFalsy(mightHaveFalsy));


//Filter method shown by Mady
// let removeFalsy = function(arr) {
//   trueArray = arr.slice().filter(Boolean);
//   return trueArray;
// };






// -----------------------------------------------

// ---------------------
// Define a function that takes an array of nested arrays and returns an object composed of propeties equal to each nested array
// const myArray = [['name', 'Charlie'], ['color', 'brown'], ['age', 10]];
// returns { name: 'Charlie', color: 'brown', age: 10 };
// ---------------------

// Put your answer below -------------------------



const arrayWithNestedArrays = [['name', 'Charlie'], ['color', 'brown'], ['age', 10]];

function toObject(array) {
  let newObject = {};
  for (let i in array) {
    const currentNestedArray = array[i];
    const currentNestedArrayKey = currentNestedArray[0];
    const currentNestedArrayValue = currentNestedArray[1];
    console.log(currentNestedArrayValue);
    newObject[currentNestedArrayKey] = currentNestedArrayValue;
  };
  return newObject;
};
console.log("Question 4 result:");
console.log(toObject(arrayWithNestedArrays));



// -----------------------------------------------

// ---------------------
// Define a function that takes an array and removes duplicate values
// [1,2,3,4,5,4,3] should return [1,2,3,4,5]
// ---------------------

// Put your answer below -------------------------




const arrayWithDuplicates = [1, 2, 3, 4, 5, 4, 3]

function removeDuplicates(array) {
  let newArray = [];
  for (let i in array) {
    if (!(array[i] in newArray)) {
      newArray.push(array[i]);
    };
  };
  return newArray;
};
console.log("Question 5 result:");
console.log(removeDuplicates(arrayWithDuplicates));




// -----------------------------------------------

// ---------------------
// Define a function that takes two arrays and returns true if they have identical values (order does not matter), it should return false otherwise
// [1,2,3,4] and [1,2,3,4] should return true
// [1,2,3,4,5] and [1,2,3,4] should return false
// [1,2,3,4] and [1,2,3,4,4] should return false
// [1,2,3,4] and [1,4,3,2] should return true
// ---------------------

// Put your answer below -------------------------



const arrayToCompare1 = [1,2,3,4]
const arrayToCompare2 = [1,2,3,4]
function testArrayInstance(array, array2) { // for the sake of cleaner code and DRY instead of having two for loops in one function
  for (let i in array) {
    if (array[i] !== array2[i]) {
      return false;
    };
  };
  return true;
};

function isArraySame(array, array2) {
  return (testArrayInstance(array, array2) && testArrayInstance(array2, array)); // one line for the sake of cleaner code and DRY :)
};
console.log("Question 6 result:");
console.log(isArraySame(arrayToCompare1, arrayToCompare2));






// -----------------------------------------------

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//            ___  ____  _  ____  ______        //
//           / _ )/ __ \/ |/ / / / / __/        //
//          / _  / /_/ /    / /_/ /\ \          //
//         /____/\____/_/|_/\____/___/          //
//                                              //
//////////////////////////////////////////////////
//////////////////////////////////////////////////

// ---------------------
// Define a function that takes an array and returns a new array with all sub-array elements concatenated into it
// [0, 1, 2, [3, 4]] should return [0, 1, 2, 3, 4]
// [0, 1, 2, [[[3, 4]]]] should return [0, 1, 2, 3, 4]
// DO NOT USE Array.prototype.flat()
// ---------------------

// Put your answer below -------------------------


const testArray1 = [0, 1, 2, [3, 4, 5]];
const testArray2 = [0, 1, 2, [[[3, 4]], [3]], [[53], [[[34]]]]];

function returnSingleArray(oldArray) {
  var newArray = [];
  function removeSubarrays(oldArray) {
    for (let i of oldArray) {
      if (!Array.isArray(i)) {
        newArray.push(i);
      } else {
        console.log("REcursion")
        removeSubarrays(i);
      };
    };
  };
  removeSubarrays(oldArray);
  return newArray;;
};

console.log(returnSingleArray(testArray1));
console.log(returnSingleArray(testArray2));




// -----------------------------------------------

// ---------------------
// Define a function that takes an array and splits it into parts of size i
// ([1, 2, 3, 4], 2) should return [[1, 2], [3, 4]]
// ([1, 2, 3, 4, 5], 3) should return [[1, 2, 3], [4, 5]]
// ---------------------

// Put your answer below -------------------------










// -----------------------------------------------
