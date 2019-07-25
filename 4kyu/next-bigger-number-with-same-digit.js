/*
You have to create a function that takes a positive integer number and returns the next bigger number formed by the same digits:

12 ==> 21
513 ==> 531
2017 ==> 2071
If no bigger number can be composed using those digits, return -1:

9 ==> -1
111 ==> -1
531 ==> -1
*/

function nextBigger(n){
    // First change number to string and push it into an array
    var string = n.toString();
    var array = [];
    array.push(...string);
    // Declare variable marker to mark the swapped number index
    var marker = 0;
    // Do looping to search the first number that has bigger number from right to left
    for (var i = array.length-1; i >= 0; i--) {
        // If it is found then swap the numbers and give marker value of current index and break the loop
        if (array[i] > array[i-1]) {
            var temp = array[i];
            array[i] = array[i-1];
            array[i-1] = temp;
            marker = i;
            break;
        }
    }
    // Create array unsorted from start to number before marker index
    var unsorted = [];
    for (var j = 0; j < marker; j++) {
        unsorted.push(array[j]);
    }
    // Create array sorted from number with marker index to end 
    var sorted = [];
    for (var k = marker; k < array.length; k++) {
        sorted.push(array[k]);
    }
    // Don't change the value of first index of sorted array
    // Do looping form index 1 to the end of sorted array to search the lower number compared with the last number in unsorted array
    for (var l = 1; l < sorted.length; l++) {
        // If the number of sorted array is smaller than the last number in unsorted array AND the number is bigger than the first number of sorted array
        if ((unsorted[unsorted.length-1] > sorted[l]) && (sorted[0] < sorted[l])) {
            // Then swap the last number in unsorted array into current number
            var temp = unsorted[unsorted.length-1];
            unsorted[unsorted.length-1] = sorted[l];
            sorted[l] = temp;
        }
    }
    // Last sort the sorted array in order to find the lowest number combination
    sorted.sort();
    // Join the unsorted array and sorted array and turn it into number format
    var result = parseInt(unsorted.concat(sorted).join(""));
    // If the number is bigger than n then return the number if not then return -1
    if (result > n) {
        return result;
    } else {
        return -1;
    }
}

console.log(nextBigger(12)); // 21
console.log(nextBigger(513)); // 531
console.log(nextBigger(2017)); // 2071
console.log(nextBigger(414)); // 441
console.log(nextBigger(144)); // 414
console.log(nextBigger(11988630)); // 13016889
console.log(nextBigger(819442)); // 821449
console.log(nextBigger(548622896)); // 548622968
console.log(nextBigger(82273395560165)); // 82273395560516

// TEST CASE
// Test.assertEquals(nextBigger(12),21)
// Test.assertEquals(nextBigger(513),531)
// Test.assertEquals(nextBigger(2017),2071)
// Test.assertEquals(nextBigger(414),441)
// Test.assertEquals(nextBigger(144),414)

// BEST SOLUTION
// function nextBigger(n){
//     var arr = n.toString().split("").reverse();
//     var i = arr.findIndex((d, _i) => d < arr[_i-1]);
//     if (i === -1) { return -1; }
//     var subarr = arr.slice(0, i);
//     var j = subarr.findIndex((d) => d > arr[i]);
//     subarr.splice(j, 1, arr[i]);
//     return parseInt(arr.slice(i+1).reverse().concat(arr[j]).concat(subarr).join(""));
// }