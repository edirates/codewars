/*
There is an array with some numbers. All numbers are equal except for one. Try to find it!

findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
It’s guaranteed that array contains more than 3 numbers.

The tests contain some very huge arrays, so think about performance.

This is the first kata in series:

Find the unique number (this kata)
Find the unique string
Find The Unique
*/

function findUniq(arr) {
    // ================= Shortest Way ====================
    if (arr[0] !== arr[1] && arr[0] !== arr[2]){
      return arr[0];
    }
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] !== arr[0]) {
            return arr[i];
        }
    }
    
    // ================== Further Way ====================
    // // Create variable duplicate to store the duplicate number
    // var duplicate = 0;
    // // Create variable index to choose where the looping starts
    // var index = 0;
    // // Make conditions to specify the duplicate value and index to start the looping
    // if (arr[0] === arr[1]) {
    //     duplicate = arr[0];
    //     index = 2;
    // } else if (arr[1] === arr[2]) {
    //     duplicate = arr[1];
    //     index = 0;
    // } else if (arr[0] === arr[2]) {
    //     duplicate = arr[0];
    //     index = 1;
    // }
    // // Do looping starts from index to check whether the array data is not same with duplicate value
    // for (var i = index; i < arr.length; i++) {
    //     if (arr[i] !== duplicate) {
    //         return arr[i];
    //     }
    // }
}

console.log(findUniq([ 0, 1, 0 ])); // 1
console.log(findUniq([ 1, 1, 1, 2, 1, 1 ])); // 2
console.log(findUniq([ 3, 10, 3, 3, 3 ])); // 10

// TEST CASE
// Test.assertEquals(findUniq([ 0, 1, 0 ]), 1);
// Test.assertEquals(findUniq([ 1, 1, 1, 2, 1, 1 ]), 2);
// Test.assertEquals(findUniq([ 3, 10, 3, 3, 3 ]), 10);

// BEST SOLUTION
// function findUniq(arr) {
//     arr.sort((a,b)=>a-b);
//     return arr[0]==arr[1]?arr.pop():arr[0]
// }
// function findUniq(arr) {
//     let [a,b,c] = arr.slice(0,3);
//     if( a != b && a!=c ) return a;
//     for( let x of arr ) if( x!=a ) return x
//   }
