// function convertHTML(str) {
//  let temp = str.split("");

//   for (let i = 0; i < temp.length; i++) {
//     switch (temp[i]) {
//       case "<":
//         temp[i] = "&lt;";
//         break;
//       case "&":
//         temp[i] = "&amp;";
//         break;
//       case ">":
//         temp[i] = "&gt;";
//         break;
//       case '"':
//         temp[i] = "&quot;";
//         break;
//       case "'":
//         temp[i] = "&apos;";
//         break;
//     }
//   }

//   temp = temp.join("");
//   return temp;
//------------------------------------------------------------------------------------
// return str
//   .split("")
//   .map((item) => {
//     if (item === "<") {
//       return (item = "&lt;");
//     } else if (item === "&") {
//       return (item = "&amp;");
//     } else if (item === ">") {
//       return (item = "&gt;");
//     } else if (item === '"') {
//       return (item = "&quot;");
//     } else if (item === "'") {
//       return (item = "&apos;");
//     }
//     return item;
//   })
//   .join("");
//--------------------------------------------------------------------------------------------
// // Use Object Lookup to declare as many HTML entities as needed.
// const htmlEntities = {
//   "&": "&amp;",
//   "<": "&lt;",
//   ">": "&gt;",
//   '"': "&quot;",
//   "'": "&apos;",
// };
// // Using a regex, replace characters with it's corresponding html entity
// return str.replace(/([&<>\"'])/g, (match) => htmlEntities[match]);
//-----------------------------------------------------------------------------------------------
// Use Object Lookup to declare as many HTML entities as needed.
//   const htmlEntities = {
//     "&": "&amp;",
//     "<": "&lt;",
//     ">": "&gt;",
//     '"': "&quot;",
//     "'": "&apos;",
//   };
//   //Use map function to return a filtered str with all entities changed automatically.
//   return str
//     .split("")
//     .map((entity) => htmlEntities[entity] || entity)
//     .join("");
// }
// console.log(convertHTML("Dolce & Gabbana"));

//=================================================================================================================
// function sumFibs(num) {
//   let sumFibo = 0;
//   let first = 0;
//   let second = 1;
//   while (second < num) {
//     if (second % 2 !== 0) {
//       sumFibo += second;
//     }
//     second += first;
//     first = second - first;
//   }
//   return sumFibo;
// }

// console.log(sumFibs(75025));

// function sumFibs(num) {
// Every third Fibbonaci number is even
//   and the rest are odd
//   let f0 = 0;
//   let f1 = 1;
//   let f2 = 1;

//   // Generate triples until num is reached
//   let sum = 0;
//   while (f1 <= num) {
//     // Update sum
//     sum += f1;
//     if (f2 <= num) sum += f2;

//     // Compute next three Fibonacci numbers
//     [f0, f1] = [f1 + f2, f2 + (f1 + f2)];
//     f2 = f0 + f1;
//   }

//   return sum;
// }

//===============================================================================================================================

// const Person = function (firstAndLast) {
//   let fullName = firstAndLast;

//   this.getFullName = function () {
//     return fullName;
//   };

//   this.getFirstName = function () {
//     return fullName.split(" ")[0];
//   };

//   this.getLastName = function () {
//     return fullName.split(" ")[1];
//   };

//   this.setFirstName = function (name) {
//     fullName = name + " " + fullName.split(" ")[1];
//   };

//   this.setLastName = function (name) {
//     fullName = fullName.split(" ")[0] + " " + name;
//   };

//   this.setFullName = function (name) {
//     fullName = name;
//   };
// };

// const bob = new Person("Bob Ross");
// console.log(bob.getLastName());

//=========================================================================================================================

// function dropElements(arr, func) {
//   while (arr.length > 0 && !func(arr[0])) {
//     arr.shift();
//   }
//   return arr;
// }

// dropElements([1, 2, 3], function (n) {
//   return n < 3;
// });

//=============================================================================================================================

// function steamrollArray(arr) {
// let sumArr = [];
// for (let i = 0; i < arr.length; i++) {
//   if (Array.isArray(arr[i])) {
//     sumArr.push(...steamrollArray(arr[i]));
//   } else {
//     sumArr.push(arr[i]);
//   }
// }
// return sumArr;

// const flat = [].concat(...arr);
// return flat.some(Array.isArray) ? steamrollArray(flat) : flat;

// return arr
//   .toString()
//   .replace(",,", ",") // "1,2,,3" => "1,2,3"
//   .split(",") // ['1','2','3']
//   .map(function (v) {
//     if (v == "[object Object]") {
//       // bring back empty objects
//       return {};
//     } else if (isNaN(v)) {
//       // if not a number (string)
//       return v;
//     } else {
//       return parseInt(v); // if a number in a string, convert it
//     }
//   });

//   const elem = arr.pop();
//   return elem
//     ? !Array.isArray(elem)
//       ? steamrollArray(arr, [elem, ...flatArr])
//       : steamrollArray(arr.concat(elem), flatArr)
//     : flatArr;
// }

// console.log(steamrollArray([1, [2], [3, [[4]]]]));
// console.log(steamrollArray([1, {}, [3, [[4]]]]));

//==============================================================================================================
