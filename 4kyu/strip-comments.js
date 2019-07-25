/*
Complete the solution so that it strips all text that follows any of a set of comment markers passed in. Any whitespace at the end of the line should also be stripped out.

Example:

Given an input string of:

apples, pears # and bananas
grapes
bananas !apples
The output expected would be:

apples, pears
grapes
bananas
The code would be called like so:

var result = solution("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"])
// result should == "apples, pears\ngrapes\nbananas"
*/

function solution(input, markers) {
    var array = input.split("");
    var flag = false;
    for (var i = 0; i < array.length; i++) {
        for (var j = 0; j < markers.length; j++) {
            if (array[i] === markers[j]) {
                flag = true;
            }
        }
        if (array[i] === "\n") {
            flag = false;
        }
        if (flag) {
            if (array[i] === " ") {
                array.splice(i,1);
                i--;
            }
            array.splice(i,1);
            i--;
        }
    }
    return array.join("");
};

console.log(solution("apples, plums % and bananas\npears\noranges !applesauce", ["%", "!"])); // "apples, plums\npears\noranges"
console.log(solution("Q @b\nu\ne -e f g", ["@", "-"])); // "Q\nu\ne"

// TEST CASE
// function checkComments(input, markers, expected) {
//   var actual;
//   actual = solution(input, markers);
//   return Test.expect(actual === expected, "Returned '" + actual + "' but expected '" + expected + "'");
// };

// checkComments("apples, plums % and bananas\npears\noranges !applesauce", ["%", "!"], "apples, plums\npears\noranges")
// checkComments("Q @b\nu\ne -e f g", ["@", "-"], "Q\nu\ne")