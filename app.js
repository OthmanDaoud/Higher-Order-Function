// EX1

let arr = [1, 2, 3];

// "Way 1" For loop
// let x = [];
// for (let i = 0; i < arr.length; i++) {
//   x.push(Math.pow(2, arr[i]));
// }
// console.log(x);

// "Way 2" ForEach

// let x = [];
// arr.forEach((arr2) => {
//   x.push(Math.pow(2, arr2));
// });
// console.log(x);

// "Way 3" map

// function map(arr) {
//   let x = arr.map((element) => Math.pow(2, element));
//   return x;
// }
// console.log(map(arr));

// EX2
// let nums = [1, 2, 3, "Othman"];

// function sort(nums) {
//   let x = nums.map((element) => {
//     if (isNaN(element)) {
//       return "N/A";
//     } else {
//       if (element % 2 === 0) {
//         return "even";
//       } else {
//         return "odd";
//       }
//     }
//   });
//   return x;
// }

// console.log(sort(nums));

// EX3
// let array = ["Rawan", "Wesam", "Hind", "Muhammad", "Esraa", "Dareen"];
// array.forEach((element) => {
//   console.log(element);
// });

// EX4

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
function fizzBuzz(array) {
  let game = array.map((element) => {
    if (element % 3 === 0) {
      return "Fizz";
    } else if (element % 5 === 0) {
      return "Buzz";
    } else if (element % 3 === 0 && element % 5 === 0) {
      return "Fizz Buzz";
    } else {
      return element;
    }
  });
  return game;
}

console.log(fizzBuzz(array));
