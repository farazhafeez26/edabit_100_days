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
