// Recursive function that counts the number of sheep. Should display the nubmer along with the mesage "Another sheep jumps over the fence" until no more sheep are left.

const sheepCounter = num => {
  // base case
  if (num === 0) {
    return "All sheep jumped over the fence";
  }

  // general case
  return "Another sheep jumps over the fence" + sheepCounter(num - 1);
};

// sheepCounter(3);

// Power Calculator

const powerCalculator = (int, exp) => {
  // base case
  if (exp < 0) {
    console.log("Exponent should be >= 0");
  }

  // general case
  console.log(int ** exp);
};

// powerCalculator(10, 2);

// Reverse String

const reverse = string => {
  // base
  if (string === "") {
    return "";
  } else {
    // general
    return reverse(string.substr(1)) + string.charAt(0);
  }
};

console.log(reverse("abc"));
