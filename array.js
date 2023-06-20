var arr = [1, 23, 2, 3, 4, 21, 34];
console.log(arr);
console.log(arr[3]);
arr[7] = 7;
console.log(arr);
console.log(arr.length);
console.log(arr[arr.length - 1]);

// Array Traversing 
for (var i = 0; i < arr.length; i++) {
    arr[i] += 2;
}
console.log(arr);

// sum of an array

var arr2 = [12, 2, 3, 54, 4];
var sum = 0;
for (var j = 0; j < arr2.length; j++) {
    sum += arr2[j];
}
console.log(sum);