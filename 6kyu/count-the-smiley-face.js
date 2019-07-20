/*
Description:
Given an array (arr) as an argument complete the function countSmileys that should return the total number of smiling faces.
Rules for a smiling face:
-Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
-A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
-Every smiling face must have a smiling mouth that should be marked with either ) or D.
No additional characters are allowed except for those mentioned.
Valid smiley face examples:
:) :D ;-D :~)
Invalid smiley faces:
;( :> :} :] 

Example cases:

countSmileys([':)', ';(', ';}', ':-D']);       // should return 2;
countSmileys([';D', ':-(', ':-)', ';~)']);     // should return 3;
countSmileys([';]', ':[', ';*', ':$', ';-D']); // should return 1;

Note: In case of an empty array return 0. You will not be tested with invalid input (input will always be an array). Order of the face (eyes, nose, mouth) elements will always be the same
Happy coding!
*/

function countSmileys(arr) {
    // Declare variable smileyCount to store the count of smiley face found
    var smileyCount = 0;
    // Make an array that contains valid smiley face
    var arraySmiley = [":)", ":-)", ":~)",":D", ":-D", ":~D", ";)", ";-)", ";~)",";D", ";-D", ";~D"];
    // Do looping based on the length of array arr
    for (var i = 0; i < arr.length; i++) {
        // Do looping based on the length of arraySmiley to check whether the current face is smiley face or not
        for (var j = 0; j < arraySmiley.length; j++) {
            // If the current face is smiley face that increment smileyCount
            if (arr[i] === arraySmiley[j]) {
                smileyCount++;
            }
        }
    }
    // Return the value of smileyCount
    return smileyCount;
}

console.log(countSmileys([])); // 0
console.log(countSmileys([':D',':~)',';~D',':)'])); // 4
console.log(countSmileys([':)',':(',':D',':O',':;'])); // 2
console.log(countSmileys([';]', ':[', ';*', ':$', ';-D'])); // 1

// TEST CASE
// Test.assertEquals(countSmileys([]), 0);
// Test.assertEquals(countSmileys([':D',':~)',';~D',':)']), 4);
// Test.assertEquals(countSmileys([':)',':(',':D',':O',':;']), 2);
// Test.assertEquals(countSmileys([';]', ':[', ';*', ':$', ';-D']), 1);

// BEST SOLUTION
// function countSmileys(arr) {
//     return arr.filter(x => /^[:;][-~]?[)D]$/.test(x)).length;
// }