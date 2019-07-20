/*
Complete the square sum function so that it squares each number passed into it and then sums the results together.

For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.
*/

function squareSum(numbers){
    // Create new variable to store the sum result
    var sum = 0;
    // Do looping based on the length of numbers array
    for (var i = 0; i < numbers.length; i++) {
        // Calculate each number in array times by their own number since it's square and add the calculation result in sum
        sum = sum + (numbers[i] * numbers[i]);
    }
    // Return the value of sum
    return sum;
}
console.log(squareSum([1,2])); // 5
console.log(squareSum([0, 3, 4, 5])); // 50

// TEST CASE
// Test.assertEquals(squareSum([1,2]), 5)
// Test.assertEquals(squareSum([0, 3, 4, 5]), 50)

// BEST SOLUTION
// function squareSum(numbers){
//     return numbers.reduce(function(sum, n){ return (n*n) + sum; }, 0)
// }