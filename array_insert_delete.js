var arr = [1, 2, 3, 4, 22, 33, 56, 5];
console.log(arr);
// array insert method 
arr.push(75);
arr.unshift(19);
console.log(arr);
arr.splice(2, 0, 12, 23, 11);
console.log(arr);
// array deletion method 
arr.pop();
console.log(arr);
console.log(arr.shift())
console.log(arr.splice(2, 1));