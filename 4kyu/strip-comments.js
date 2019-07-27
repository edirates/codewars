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
    // Use flag for record the strings that are not be stripped away
    var flag = true;
    // Declare result to contain the recorded strings
    var result = "";
    // Do Looping to record all the strings that are not comment in markers
    for (var i = 0; i < input.length; i++) {
        // Check in array markers
        for (var j = 0; j < markers.length; j++) {
            // If current string found in array markers that turn off the flag in order to stop recording
            if (input[i] === markers[j]) {
                flag = false;
            } 
        }
        // If current string is "\n" then turn on flag in order to start recording again
        if (input[i] === "\n") {
            flag = true;
        }
        // When flag is true then keep recording
        if (flag) {
            result = result + input[i];
        }
    }
    // Display result with no whitespace
    return result.trim();
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

// BEST SOLUTION
// function solution(input, markers){
//     return input.replace(new RegExp("\\s?[" + markers.join("") + "].*(\\n)?", "gi"), "$1");
// }
// function solution(input, markers) {
//     return input.split('\n').map(
//         line => markers.reduce(
//         (line, marker) => line.split(marker)[0].trim(), line
//         )
//     ).join('\n')
//     }

//     RegExp.escape = function (s) {
//     return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
// }
  
// function solution (input, markers){
//     markers_regexp = markers.map(function(marker) {
//         return RegExp.escape(marker);
//     }).join("|");
//     pattern = new RegExp("\\s*(" + markers_regexp + ").*?\$", "gm");
//     return input.replace(pattern, "");
// }