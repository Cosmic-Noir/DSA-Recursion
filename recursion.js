// Recursive function that counts the number of sheep. Should display the nubmer along with the mesage "Another sheep jumps over the fence" until no more sheep are left.

const sheepCounter = function(num) {
  // base case
  if (num === 0) {
    return "All sheep jumped over the fence";
  }

  // general case
  return "Another sheep jumps over the fence" + sheepCounter(num - 1);
};

sheepCounter(3);
