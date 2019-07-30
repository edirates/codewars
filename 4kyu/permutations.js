/*
In this kata you have to create all permutations of an input string and remove duplicates, if present. This means, you have to shuffle all letters from the input in all possible orders.

Examples:

permutations('a'); // ['a']
permutations('ab'); // ['ab', 'ba']
permutations('aabb'); // ['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa']
The order of the permutations doesn't matter.
*/


function permutations(string) {
    // Create results to contain all possible permutations
    var results = [];
    // Make base case to quit recursion
    if (string.length === 1) {
        results.push(string);
        return results;
    }
    for (var i = 0; i < string.length; i++) {
        var firstChar = string[i];
        var charsLeft = string.substring(0, i) + string.substring(i + 1);
        var innerPermutations = permutations(charsLeft);
        for (var j = 0; j < innerPermutations.length; j++) {
            results.push(firstChar + innerPermutations[j]);
        }
    }
    // Make object to filter same char of permutations
    var object = {};
    for (var k = 0; k < results.length; k++) {
        object[results[k]] = 0;
    }
    // Return the unique permutations
    var keys = Object.keys(object);
    return keys;
}

console.log(permutations('a')); // ['a']
console.log(permutations('ab')); // ['ab', 'ba'].sort()
console.log(permutations('aabb')); // ['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa'].sort()

//TEST CASE
// describe('permutations', function() {
//   it('examples from description', function() {
//     Test.assertSimilar(permutations('a'), ['a']);
//     Test.assertSimilar(permutations('ab').sort(), ['ab', 'ba'].sort());
//     Test.assertSimilar(permutations('aabb').sort(), ['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa'].sort());
//   });
// });


// ================== Splice Method Fail ==================
// var result = {};
// var array = string.split("");
// var arrayCopy = array.slice();
// for (var i = 0; i < array.length; i++) {
//     var spliceArray = arrayCopy.splice(i,1);
//     for (var j = 0; j < array.length; j++) {
//         arrayCopy.splice(j,0,spliceArray[0]);
//         var permutation = arrayCopy.join("");
//         if (result[permutation] === undefined) {
//             result[permutation] = 0;
//         }
//         result[permutation]++;
//         spliceArray = arrayCopy.splice(j,1);
//     }
//     arrayCopy.splice(i,0,spliceArray[0]);
// }
// var keys = Object.keys(result);
// return keys;
