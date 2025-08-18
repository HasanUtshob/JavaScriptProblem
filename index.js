// -----------------------------------------------------Problem 1-------------------------------------------------
const revers = (str) => {
  return str.split("").reverse().join("");
};

// console.log(revers("utshob"));

// --------------------------------------------------Problem 2--------------------------------------------------

const findVowel = (word) => {
  const Vowel = "aeiouAEIOU";
  let Count = 0;
  for (let char of word) {
    if (Vowel.includes(char)) {
      Count++;
    }
  }
  return Count;
};

// console.log(findVowel("Utshob"));

// ----------------------------------------------------Problem 3 ----------------------------------------------

const palindromeWord = (str) => {
  str = str.toLowerCase();

  return str === str.split("").reverse().join("");
};

// console.log(palindromeWord("madam"));
// console.log(palindromeWord("eye"));
// console.log(palindromeWord("Utshob"));

// -----------------------------------------------Problem 4 -------------------------------------------

const NumCompare = (arr) => {
  return (Max = Math.max(...arr));
};

// console.log(NumCompare([2, 9, 10, 4]));

// ------------------------------------------Problem 5--------------------------------------------

const DupliNum = (arr) => {
  return [...new Set(arr)];
};

// console.log(DupliNum([2, 5, 8, 7, 7, 6, 8, 2, 9]));

// ------------------------------------------Problem 6--------------------------------------------
function sumArray(arr) {
  let sum = 0;
  for (let num of arr) {
    sum += num;
  }
  return sum;
}

// console.log(sumArray([1, 2, 3, 4]));

// ---------------------------------------------------------------------Problem 7 ------------------------------------

function getEvenNumbers(arr) {
  let evens = [];
  for (let num of arr) {
    if (num % 2 === 0) {
      evens.push(num);
    }
  }
  return evens;
}

// console.log(getEvenNumbers([1, 2, 3, 4, 5, 6]));

// ---------------------------------------------------------------------Problem 8 ------------------------------------

function capitalizeWords(str) {
  return str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

// console.log(capitalizeWords("hello utshob"));

// ---------------------------------------------------------------------Problem 9 ------------------------------------

function factorial(n) {
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
}

// console.log(factorial(5));

// ---------------------------------------------------------------------Problem 10 ------------------------------------

function pingPong() {
  for (let i = 1; i <= 20; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      //   console.log("PingPong");
    } else if (i % 3 === 0) {
      //   console.log("Ping");
    } else if (i % 5 === 0) {
      //   console.log("Pong");
    } else {
      console.log(i);
    }
  }
}

// pingPong();
