/*
Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.

Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case
*/

var countBits = function(n) {
    // First convert number to binary string format
    var binary = n.toString(2);
    // Declare variable bit to count whether there is string with value 1
    var bit = 0;
    // Do looping based on the length of binary
    for (var i = 0; i < binary.length; i++) {
        // If there is string "1" found then increment bit value
        if (binary[i] === "1") {
            bit++;
        }
    }
    // Return the value of bit
    return bit;
};

console.log(countBits(0)); // 0
console.log(countBits(4)); // 1
console.log(countBits(7)); // 3
console.log(countBits(9)); // 2
console.log(countBits(10)); // 2

// TEST CASE
// Test.assertEquals(countBits(0), 0);
// Test.assertEquals(countBits(4), 1);
// Test.assertEquals(countBits(7), 3);
// Test.assertEquals(countBits(9), 2);
// Test.assertEquals(countBits(10), 2);

// BEST SOLUTION
// var countBits = function(n) {
//     return n.toString(2).replace(/0/g,'').length;
// };