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

  allKeys.forEach((old_key) => {
    newObject[o[old_key]] = old_key; // put the old key as value in the newObject at the key: o[old_key]
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

function invert(o) {
  const hi = {};

  const allKeys = Object.keys(o);
  const allValues = allKeys.forEach((x) => {
    hi[o[x]] = x;
  });
  return hi;
}

const alphabets = {
  q: "z",
  f: "w",
};

console.log(invert(alphabets));

function expensiveOrders(orders, cost) {}

//Write a function that has two parameters: orders and cost. Return any orders that are greater than the cost

//expensiveOrders({ "a": 3000, "b": 200, "c": 1050 }, 1000)
//➞ { "a": 3000, "c": 1050 }

//expensiveOrders({ "Gucci Fur": 24600, "Teak Dining Table": 3200, "Louis Vutton Bag": 5550, "Dolce Gabana Heels": 4000 }, 20000)
//➞ { "Gucci Fur": 24600 }

//expensiveOrders({ "Deluxe Burger": 35, "Icecream Shake": 4, "Fries": 5 }, 40)
//➞ {}

function expensiveOrders(orders, cost) {
  const allKeys = Object.keys(orders);
  const allValues = allKeys.map((x) => {
    return [orders[x]];
  });

  if (allValues > cost) {
    return allValues;
  } else {
    return false;
  }
}

const order = {
  a: 3000,
  b: 200,
  c: 1050,
};

console.log(expensiveOrders(order, 1000));

function afterNYears(names, n) {
  const allKeys = Object.keys(names);
  allKeys.forEach((x) => {
    names[x] = names[x] + Math.abs(n); //absolute number
  });
  return names;
}

function afterNYears(names, n) {
  const allKeys = Object.keys(names);
  allKeys.forEach((x) => {
    names[x] = names[x] + Math.abs(n);
  });
}

function mostExpensiveItem(obj) {
  const allKeys = Object.keys(obj);
  let max = 0;
  let mostExpensiveItem = null;

  allKeys.forEach((x) => {
    const value = obj[x];

    // update the max value
    if (value > max) {
      max = value;
      mostExpensiveItem = x;
    }
  });

  return mostExpensiveItem;
}



function mostExpensiveItem*


// With reduce

function mostExpensiveItem(obj) {
  const allKeys = Object.keys(obj); // ["tv", "skate", "stereo" ]

  const mostExpensiveItem = allKeys.reduce((acc, val, ind) => {
    console.log(acc, val, ind);

    if (obj[acc] < obj[val]) {
      return val;
    } else {
      return acc;
    }
  });
  return mostExpensiveItem;
}

/*
Math.max(30);
Math.max(20);
Math.max(50);

const max = 50;

MaxValue = [30, 20, 50];
*/

// mostExpensiveItem({
//  tv: 30,
// skate: 20,
// stereo: 50,
//}) ➞ "stereo"



function invert(o) {
    const allKeys = Object.keys(o);
  
    const newObject = {};
  
    allKeys.forEach((old_key) => {
      console.log(old_key, o[old_key]);
      
      newObject[o[old_key]] = old_key; // put the old key as value in the newObject at the key: o[old_key]
    });
    return newObject;
  }
  
  console.log(invert({ "z": "q", "w": "f" }));


  console.log(mostExpensiveItem({
    tv: 30,
    skate: 20,
    stereo: 50,
    }));
    
    function mostExpensiveItem(ob){
        const allKeys=Object.keys(obj);
        const mostExpensiveItem=allKeys.reduce((acc,val,ind)=>{
            console.log(acc,val,ind);

            if(obj[acc] <obj[val]){
                return val;
            } else {
                return acc;
            }
                   });
                   return mostExpensiveItem;
    }

    function mapping(letters) {
        return letters.reduce((a, c) => (a[c] = c.toUpperCase(), a), {});
    }