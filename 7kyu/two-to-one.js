/*
Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, the longest possible, containing distinct letters,

each taken only once - coming from s1 or s2.
Examples:
a = "xyaabbbccccdefww"
b = "xxxxyyyyabklmopq"
longest(a, b) -> "abcdefklmopqwxy"

a = "abcdefghijklmnopqrstuvwxyz"
longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"
*/

function longest(s1, s2) {
    // First create array variable to store the grouping char from each string
    var array = [];
    // Do looping for grouping char from first string
    for (var i = 0; i < s1.length; i++) {
        // If array still empty then push the value
        if (array.length === 0) {
            array.push(s1[i]);
        } 
        // Else check if there any char in array result
        else {
            var flag = true;
            // If there is the same char then turn the flag off
            for (var j = 0; j < array.length; j++) {
                if (s1[i] === array[j]) {
                    flag = false;
                }
            }
            // If current char not found in array then push to array
            if (flag) {
                array.push(s1[i]);
            }
        }
    }
    // Do same looping in second string
    for (var i = 0; i < s2.length; i++) {
        var flag = true;
        for (var j = 0; j < array.length; j++) {
            if (s2[i] === array[j]) {
                flag = false;
            }
        }
        if (flag) {
            array.push(s2[i]);
        }
    }
    // Last sort the array and join it
    return array.sort().join("");

    // ===================== Grouping Two String At Once =================
    // var sameChar = {};
    // var longest = 0;
    // var shortest = 0;
    // if (s1.length > s2.length) {
    //     longest = s1;
    //     shortest = s2;
    // } else {
    //     longest = s2;
    //     shortest = s1;
    // }
    // for (var i = 0; i < longest.length; i++) {
    //     for (var j = 0; j < shortest.length; j++) {
    //         if (longest[i] === shortest[j]) {
    //             if (sameChar[longest[i]] === undefined) {
    //                 sameChar[longest[i]] = 1;
    //             } else {
    //                 sameChar[longest[i]] = sameChar[longest[i]] + 1;
    //             }
    //         }
    //     }
    // }
    // return Object.keys(sameChar).sort().join("");
}

console.log(longest("aretheyhere", "yestheyarehere")); // "aehrsty"
console.log(longest("loopingisfunbutdangerous", "lessdangerousthancoding")); // "abcdefghilnoprstu"
console.log(longest("inmanylanguages", "theresapairoffunctions")); // "acefghilmnoprstuy"


// TEST CASE 
// Test.describe("longest",function() {
// Test.it("Basic tests",function() {
//     Test.assertEquals(longest("aretheyhere", "yestheyarehere"), "aehrsty")
//     Test.assertEquals(longest("loopingisfunbutdangerous", "lessdangerousthancoding"), "abcdefghilnoprstu")
//     Test.assertEquals(longest("inmanylanguages", "theresapairoffunctions"), "acefghilmnoprstuy")
// })})

// BEST SOLUTION
// function longest(s1, s2) {
//     return Array.from(new Set(s1 + s2)).sort().join('');
// }