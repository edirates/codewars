/*
Consider a sequence u where u is defined as follows:

The number u(0) = 1 is the first one in u.
For each x in u, then y = 2 * x + 1 and z = 3 * x + 1 must be in u too.
There are no other numbers in u.
Ex: u = [1, 3, 4, 7, 9, 10, 13, 15, 19, 21, 22, 27, ...]

1 gives 3 and 4, then 3 gives 7 and 10, 4 gives 9 and 13, then 7 gives 15 and 22 and so on...

Task:
Given parameter n the function dbl_linear (or dblLinear...) returns the element u(n) of the ordered (with <) sequence u (so, there are no duplicates).

Example:
dbl_linear(10) should return 22

Note:
Focus attention on efficiency
*/

function dblLinear(n) {
    // Declare first array
    var array = [1];
    // Declare index for y and index for z
    var indexY = 0;
    var indexZ = 0;
    // Do looping while array length is equals or smaller than requested index
    while (array.length <= n) {
        // Calculate y and z with their formula
        var y = ( array[indexY] * 2 ) + 1;
        var z = ( array[indexZ] * 3 ) + 1;
        // If y smaller than z then push the value of y and increment index y in order to the array get sorted automatically
        if (y < z) {
            array.push(y);
            indexY++;
        } 
        // If y greater than z then push the value of z and increment index z in order to the array get sorted automatically
        else if (y > z) {
            array.push(z);
            indexZ++;
        } 
        // If y equals to z then push the value of y or z and increment both index y and index z in order to the array get sorted automatically
        else {
            array.push(y);
            indexY++;
            indexZ++;
        }
    }
    // return the array with requested index
    return array[n];
}

console.log(dblLinear(10)); // 22
console.log(dblLinear(20)); // 57
console.log(dblLinear(30)); // 91
console.log(dblLinear(50)); // 175
console.log(dblLinear(100)); // 447

// // TEST CASE
// function testing(actual, expected) {
// 	Test.assertEquals(actual, expected)
// }

// Test.describe("dblLinear",function() {
// Test.it("Basic tests",function() { 
// 	testing(dblLinear(10), 22)
//     testing(dblLinear(20), 57)
//     testing(dblLinear(30), 91)
//     testing(dblLinear(50), 175)
//     testing(dblLinear(100), 447)
// })})

// BEST SOLUTION
// function dblLinear(n) {
//     var ai = 0, bi = 0, eq = 0;
//     var sequence = [1];
//     while (ai + bi < n + eq) {
//         var y = 2 * sequence[ai] + 1;
//         var z = 3 * sequence[bi] + 1;
//         if (y < z) { sequence.push(y); ai++; }
//         else if (y > z) { sequence.push(z); bi++; }
//         else { sequence.push(y); ai++; bi++; eq++; }
//     }
//     return sequence.pop();
// }