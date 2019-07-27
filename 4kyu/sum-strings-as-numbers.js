/*
Given the string representations of two integers, return the string representation of the sum of those integers.

For example:

sumStrings('1','2') // => '3'
A string representation of an integer will contain no characters besides the ten numerals "0" to "9".
*/

function sumStrings(a,b) { 
    // Create sum for contain the sum result
    var sum = "";
    var str1 = a;
    var str2 = b;
    // If str2 is longer than str1, swap them.
    if(str2.length > str1.length ){
        var temp = str2;
        str2 = str1;
        str1 = temp;
    }
    // Create num1 and num2 to contain each digit starting from right of str1 and str2
    var num1;
    var num2;
    // Create carry to contain carried number to next decimal place
    var carry = 0;
    // Create temp to contain the calculation of num1 and num2 and carry
    var temp;
    // Create digitSum to contain the last number of temp for storing at sum
    var digitSum;
    // Do looping for the longest string digit
    for (var i = 0; i < str1.length; i++) {
        // Take the last digit at str1 and str2 from right
        num1 = parseInt(str1.charAt(str1.length - 1 - i));
        num2 = parseInt(str2.charAt(str2.length - 1 - i));
        // If num2 is undefined because the string has ended then give it 0 value
        if (num2 === undefined){
            num2 = 0;
        }
        // Calculate num1+num2+carry and turn it into string
        temp = (carry + num1 + num2).toString();
        // Take the last digit of temp to store in digitSum
        digitSum = temp.charAt(temp.length - 1);
        // Take the first digit of temp to make it carry
        carry = parseInt(temp.substr(0, temp.length - 1));
        // If carry is not a number because temp only 1 digit then give it 0 value
        if (isNaN(carry)) {
            carry = 0;
        }
        // If current number is the last digit then store the temp combined with sum
        if ( i === str1.length-1 ) {
            sum = temp + sum;
        } 
        // If not the last number then combined the digitSum with sum and continue the looping
        else {
            sum = digitSum + sum;
        }
    }
    // If the first number of sum is 0 then slice it
    if (sum[0] === "0") {
        sum = sum.slice(1);
    }
    return sum;
}
console.log(sumStrings('00103', '08567'));
console.log(sumStrings('123','456')); // '579'

// TEST CASE
// Test.assertEquals(sumStrings('123','456'),'579')


// BEST SOLUTION
// String.prototype.reverse = function() {
//     return this.split('').reverse().join('');
//   }
  
//   function sumStrings(a,b) {
//     a = a.reverse(); b = b.reverse();
//     var carry = 0;
//     var index = 0;
//     var sumDigits = [];
//     while (index < a.length || index < b.length || carry != 0) {
//       var aDigit = index < a.length ? parseInt(a[index]) : 0;
//       var bDigit = index < b.length ? parseInt(b[index]) : 0;
//       var digitSum = aDigit + bDigit + carry;
//       sumDigits.push((digitSum % 10).toString());
//       carry = Math.floor(digitSum / 10);
//       index++;
//     }
//     sumDigits.reverse();
//     while (sumDigits[0] == '0') sumDigits.shift();
//     return sumDigits.join('');
//   }