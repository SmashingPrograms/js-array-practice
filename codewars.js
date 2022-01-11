// # 1
// Testing 1-2-3
// https://www.codewars.com/kata/54bf85e3d5b56c7a05000cf9/train/javascript


function number(array) {
  let newArray = [];
  for (let i in array) {
    newArray.push(`${Number(i)+1}: ${array[i]}`)
  };
  return newArray;
};

// # 2
// Filling an array (part 1)
// https://www.codewars.com/kata/571d42206414b103dc0006a1/train/javascript

function arr(n) {
  array = [];
  for (i = 0; i < n; i++) {
    array.push(i);
  };
  return array;
};


// # 3
// Drone Fly-By
// https://www.codewars.com/kata/58356a94f8358058f30004b5/train/javascript


function flyBy(lamps, drone){
  let lampsOn = '';
  for (let i = 0; i < drone.length; i++) {
    lampsOn += 'o';
  };
  const lampsOff = lamps.slice(lampsOn.length, lamps.length);
  return lampsOn + lampsOff;
};


// # 4
// Get the mean of an array
// https://www.codewars.com/kata/563e320cee5dddcf77000158/train/javascript

function getAverage(marks){
  let summation = 0;
  for (let i of marks) {
    summation += i;
  };
  const average = Math.floor(summation / marks.length);
  return average;
};


// #5
// THE SOUL OF WIT: REVERSE AN ARRAY
// https://www.codewars.com/kata/59b81886460387d8fc000043/train/javascript



reverse=a=>a.map(a.pop,[...a])

//couldn't use the semicolon at the end because that's too long :(