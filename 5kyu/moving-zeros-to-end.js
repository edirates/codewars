/*
Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]
*/

var moveZeros = function (arr) {
    // Create variable to count the amount of zero found
    var countZero = 0;
    // Do looping for splice the zero in array and increment the countZero
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            arr.splice(i,1);
            countZero++;
        }
    }
    // Do looping based on the amount of zero found and push zero value
    for (var j = 0; j < countZero; j++) {
        arr.push(0);
    }
    return arr;
}

console.log(moveZeros([false,1,0,1,2,0,1,3,"a"]));

// TEST CASE
// Test.assertEquals(
//   JSON.stringify(moveZeros([1,2,0,1,0,1,0,3,0,1])),
//   JSON.stringify([ 1, 2, 1, 1, 3, 1, 0, 0, 0, 0 ])
// );

// BEST SOLUTION
// var moveZeros = function (arr) {
//     return arr.filter(function(x) {return x !== 0}).concat(arr.filter(function(x) {return x === 0;}));
// }