/*
get ascii value of character

write a function getASCII which inputs a character and returns the corresponding ascii value for that character. Example : getASCII('A') => 65

for ASCII table, you can refer to http://www.asciitable.com/
*/

function getASCII(c){
    // return the ascii code of first string from c
    return c.charCodeAt(0);
}
console.log(getASCII('A')); // 65
console.log(getASCII(' ')); // 32
console.log(getASCII('!')); // 33

// TEST CASE
// Test.assertEquals(getASCII('A'),65)
// Test.assertEquals(getASCII(' '),32)
// Test.assertEquals(getASCII('!'),33)