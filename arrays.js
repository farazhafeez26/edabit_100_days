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
