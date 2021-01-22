function ascDesNone(arr, str) {
  if (str == "Asc") {
    return arr.sort((a, b) => {
      return a - b;
    });
  }
  if (str == "Des") {
    return arr.sort((a, b) => {
      return b - a;
    });
  }

  if (str == "None") return arr;
}

function toArray(obj) {
  const all_keys = Object.keys(obj);

  return all_keys.map((x) => {
    return [x, obj[x]];
  });
}

//x is the key and obj[x] is the value

function giveMeSomething(a) {
  return "something" + " " + a;
}

function triArea(base, height) {
  return (base * height) / 2;
}

function getVoteCount(votes) {
  return votes.upvotes - votes.downvotes;
}

//another variation
function getVoteCount(votes) {
  return votes["upvotes"] - votes["downvotes"];
}

function minMax(arr) {
  const min = Math.min(...arr);
  const max = Math.max(...arr);

  return [min, max];
}

function canNest(arr1, arr2) {
  return (
    Math.min(...arr1) > Math.min(...arr2) &&
    Math.max(...arr1) < Math.max(...arr2)
  );
}
const years = [1763, 1972, 1925, 1916, 1984, 1124, 1950, 2020];

function getYears(years) {
  return years.filter((year) => year > 1950);
}
const numbers = [1, 4, 9, 16];

function subtractTwo(numbers) {
  return numbers.map((x) => x - 2);
}

function tuckIn(arr1, arr2) {
  return [arr1[0], ...arr2, arr1[1]];
}

function numberSplit(n) {
  return [Math.floor(n / 2), Math.ceil(n / 2)];
}

function filterArray(arr) {
  return arr.filter((x) => Number.isInteger(x));
}

function parseArray(arr) {
  return arr.map(String);
}

const array1 = [1, 2, "a", "1a"];

console.log(array1.toString());

function dropRight(arr, num = 1) {
  return arr.splice(0, arr.length - num);
}

//Stuck
// https://e/dabit.com/challenge/JDkyQJqNfJNhvjmRW

function objectToArray(obj) {
  const allKeys = Object.keys(obj);
  const allValues = allKeys.map((x) => {
    return [x, obj[x]];
  });
  return allValues;
}

function getBudgets(arr) {
  const sum = arr.reduce((acc, element) => {
    return acc + element.budget;
  }, 0);
  return sum;
}

// [1,2,3]
// [1,2,3].reduce(func, initial_value)
// (acc, el) => () -->  0, 1 ------> first_return
// (acc, el) => () -->  (first_return,2) -->

function calculateLosses(obj) {
  const allKeys = Object.keys(obj);

  const allValues = allKeys.map((x) => {
    return obj[x];
  });

  if (allKeys.length == 0) {
    return "Lucky you!";
  }

  return allValues.reduce((acc, val) => {
    return acc + val;
  }, 0);
}

function freeShipping(order) {
  const allValues = Object.values(order);
  //NOTE it always has to be an array
  const orderSum = allValues.reduce((acc, val) => {
    return acc + val;
  }, 0);

  if (orderSum > 50) {
    return true;
  } else {
    return false;
  }
}

//Note for each

function afterNYears(names, n) {
  const allKeys = Object.keys(names);
  allKeys.forEach((x) => {
    names[x] = names[x] + Math.abs(n); //absolute number
  });
  return names;
}

function invert(o) {
  const allKeys = Object.keys(o); // get key of initial object

  const newObject = {}; // create a new empty object

  allkeys.forEach((x) => {
    newObject[o[x]] = x; // { "value": "key"  };
  });

  return newObject;
}

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach///forEach modifies the object or arrays
//https://edabit.com/challenge/YTECpnCCeJsYqYvfF

//invert({ "z": "q", "w": "f" })
//➞ { "q": "z", "f": "w" }

function invert(o) {
  const allKeys = Object.keys(o);

  const newObject = {};

  allkeys.forEach((x) => {
    newObject[o[x]] = x;
  });
  return newObject;
}

function freeShipping(order) {
  const allValues = Object.values(order);
  //NOTE it always has to be an array
  const orderSum = allValues.reduce((acc, val) => {
    return acc + val;
  }, 0);

  if (orderSum > 50) {
    return true;
  } else {
    return false;
  }
}

//Note for each

function afterNYears(names, n) {
  const allKeys = Object.keys(names);
  allKeys.forEach((x) => {
    names[x] = names[x] + Math.abs(n); //absolute number
  });
  return names;
}
