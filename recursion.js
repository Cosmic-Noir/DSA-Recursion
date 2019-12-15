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

// console.log(reverse("abc"));

// nth Triangular Number

const triNum = n => {
  // base
  if (n === 1) {
    return 1;
  } else {
    // general
    return n + triNum(n - 1);
  }
};

// console.log(triNum(5));

// String splitter
const myArray = [];

const stringSplitter = string => {
  // base
  if (!string.includes("/")) {
    myArray.push(string);
    console.log(string);
    return myArray;
  } else {
    const index = string.indexOf("/");
    // console.log(index);
    let num = string.substr(0, index);
    // console.log(num);
    myArray.push(num);
    // console.log(myArray);
    let slicedString = string.slice(index + 1);
    // console.log(slicedString);
    stringSplitter(slicedString);
  }
};

// console.log(stringSplitter("02/20/2020"));

// Fibonacci
const fibonacci = num => {
  // base
  if (num <= 2) {
    return 1;
  } else {
    // general
    return fibonacci(num - 1) + fibonacci(num - 2);
  }
};

// console.log(fibonacci(7));

// Factorial

const factorial = number => {
  // base
  if (number === 1) {
    return 1;
  } else {
    // general
    return number * factorial(number - 1);
  }
};

// console.log(factorial(5));

// Way out of maze
let path = "";
let row = 0;
let col = 0;

const mazeRunner = maze => {
  // Base
  if (maze[row][col] === "e") {
    console.log("Maze escaped!");
    return path;
  } else if (maze[row][col + 1] === " ") {
    // If path to right is open, move right
    col += 1;
    path += "R";
    console.log(path);
    mazeRunner(maze);
  } else if (
    maze[row][col + 1] === "*" ||
    (maze[row][col + 1] === undefined && maze[row + 1][col] === " ") ||
      maze[row + 1][col] === "e"
  ) {
    // If path to the right is closed, and path down is open, move down
    row += 1;
    path += "D";
    console.log(path);

    mazeRunner(maze);
  }
};

let maze = [
  [" ", " ", " ", "*", " ", " ", " "],
  ["*", "*", " ", "*", " ", "*", " "],
  [" ", " ", " ", " ", " ", " ", " "],
  [" ", "*", "*", "*", "*", "*", " "],
  [" ", " ", " ", " ", " ", " ", "e"]
];

console.log(mazeRunner(maze));

// Anagrams
// const anagram = string => {
//   const perms = [];
//   // base
//   if (string.length === 1) {
//     perms.push(string);
//     return string;
//   } else {
//   }
// };
