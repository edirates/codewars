/*
A format for expressing an ordered list of integers is to use a comma separated list of either

individual integers
or a range of integers denoted by the starting integer separated from the end integer in the range by a dash, '-'. The range includes all integers in the interval including both endpoints. It is not considered a range unless it spans at least 3 numbers. For example ("12, 13, 15-17")
Complete the solution so that it takes a list of integers in increasing order and returns a correctly formatted string in the range format.

Example:

solution([-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]);
// returns "-6,-3-1,3-5,7-11,14,15,17-20"
*/

function solution(list){
    var result = [];
    var flag = false;
    var count = 0;
    var markerStart = 0;
    var markerEnd = 0;
    var ending = false;
    var sorted = list.sort(function (a,b) { return a - b; });
    for (var i = 0; i < sorted.length-1; i++) {
        if ( (sorted[i+1] - sorted[i]) === 1) {
            flag = false;
            count++;
            if (count === 0) {
                markerStart = i;
            }
        } 
        else {
            flag = true;
            markerEnd = i;
        }
        if ( i === sorted.length-2 ) {
            flag = true;
            if (sorted[sorted.length-1] - sorted[sorted.length-2] === 1) {
                markerEnd = i+1;
            } else {
                markerEnd = i;
                ending = true;
            }
        }
        if (flag) {
            if (count >= 2) {
                result.push(sorted[markerStart] + "-"+ sorted[markerEnd]);
            } 
            else {
                for (var j = markerStart; j <= markerEnd; j++) {
                    result.push(sorted[j]);
                }
            }
            if (ending) {
                result.push(sorted[sorted.length-1]);
            }
            markerStart = markerEnd+1;
            i = markerEnd;
            markerEnd = 0;
            count = 0;
            flag = false;
        }
    }
    return result.join(",");
}

console.log(solution([-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20])); // "-6,-3-1,3-5,7-11,14,15,17-20"
console.log(solution([-78, -77, -76, -75, -74, -72, -69, -68, -65, -60, -58, -56, -53, -52, -51, -50, -49, -47])); // "-78--74,-72,-69,-68,-65,-63,-60,-58,-56,-53--49,-47"

// TEST CASE
// Test.assertEquals(solution([-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]), "-6,-3-1,3-5,7-11,14,15,17-20")

// BEST SOLUTION
// function solution(list){
//     for(var i = 0; i < list.length; i++){
//        var j = i;
//        while(list[j] - list[j+1] == -1) j++;
//        if(j != i && j-i>1) list.splice(i, j-i+1, list[i] +'-'+list[j]);
//    }
//    return list.join();
//  }