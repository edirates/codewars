/*
Snail Sort
Given an n x n array, return the array elements arranged from outermost elements to the middle element, traveling clockwise.

array = [[1,2,3],
         [4,5,6],
         [7,8,9]]
snail(array) #=> [1,2,3,6,9,8,7,4,5]
For better understanding, please follow the numbers of the next array consecutively:

array = [[1,2,3],
         [8,9,4],
         [7,6,5]]
snail(array) #=> [1,2,3,4,5,6,7,8,9]
This image will illustrate things more clearly:


NOTE: The idea is not sort the elements from the lowest value to the highest; the idea is to traverse the 2-d array in a clockwise snailshell pattern.

NOTE 2: The 0x0 (empty matrix) is represented as [[]]
*/

snail = function(array) {
    // First create empty array to contain the sorted snail pattern
    var result = [];
    // If the length of array only contain 1 number then return it immediately
    if (array.length === 1) {
        return array[0];
    }
    // Else do four steps to get the snail pattern
    else {
        // Do looping while the array length is not empty
        while (array.length > 0) {
            // First Step = Cut the first row of array and push each values in the first row array
            result.push(...array.shift());
            // Second Step = Do looping to pop the last value of each row of array
            for(var i = 0; i < array.length; i++){
                result.push(array[i].pop());
            }
            // Third Step = Pop the last value of the last row of array and reverse it to push to result array
            result.push(...(array.pop() || []).reverse());
            // Four Step = Do looping to shift/get the first value of each row of array
            for(var i = array.length-1; i >= 0; i--){
                result.push(array[i].shift());
            }
        }
    }
    // Return the value of sorted snail pattern
    return result;
}

console.log(snail([[]])); // []
console.log(snail([[1]])); // [1]
console.log(snail([[1, 2, 3], [4, 5, 6], [7, 8, 9]])); // [1, 2, 3, 6, 9, 8, 7, 4, 5]
console.log(snail([[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13, 14, 15], [16, 17, 18, 19, 20], [21, 22, 23, 24, 25]]));// [1, 2, 3, 4, 5, 10, 15, 20, 25, 24, 23, 22, 21, 16, 11, 6, 7, 8, 9, 14, 19, 18, 17, 12, 13]
console.log(snail([[1, 2, 3, 4, 5, 6], [20, 21, 22, 23, 24, 7], [19, 32, 33, 34, 25, 8], [18, 31, 36, 35, 26, 9], [17, 30, 29, 28, 27, 10], [16, 15, 14, 13, 12, 11]]));// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36]

// TEST CASE
// Test.assertDeepEquals(snail([[]]), []);
// Test.assertDeepEquals(snail([[1]]), [1]);
// Test.assertDeepEquals(snail([[1, 2, 3], [4, 5, 6], [7, 8, 9]]), [1, 2, 3, 6, 9, 8, 7, 4, 5]);
// Test.assertDeepEquals(snail([[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13, 14, 15], [16, 17, 18, 19, 20], [21, 22, 23, 24, 25]]), [1, 2, 3, 4, 5, 10, 15, 20, 25, 24, 23, 22, 21, 16, 11, 6, 7, 8, 9, 14, 19, 18, 17, 12, 13]);
// Test.assertDeepEquals(snail([[1, 2, 3, 4, 5, 6], [20, 21, 22, 23, 24, 7], [19, 32, 33, 34, 25, 8], [18, 31, 36, 35, 26, 9], [17, 30, 29, 28, 27, 10], [16, 15, 14, 13, 12, 11]]), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36]);

// BEST SOLUTION
// snail = function(array) {
//     var result;
//     while (array.length) {
//       // Steal the first row.
//       result = (result ? result.concat(array.shift()) : array.shift());
//       // Steal the right items.
//       for (var i = 0; i < array.length; i++)
//         result.push(array[i].pop());
//       // Steal the bottom row.
//       result = result.concat((array.pop() || []).reverse());
//       // Steal the left items.
//       for (var i = array.length - 1; i >= 0; i--)
//         result.push(array[i].shift());
//     }
//     return result;
//   }

// function snail(array) {
//     var vector = [];
//     while (array.length) {
//       vector.push(...array.shift());
//       array.map(row => vector.push(row.pop()));
//       array.reverse().map(row => row.reverse());
//     }
//     return vector;
//   }