/*
Sudoku Background
Sudoku is a game played on a 9x9 grid. The goal of the game is to fill all cells of the grid with digits from 1 to 9, so that each column, each row, and each of the nine 3x3 sub-grids (also known as blocks) contain all of the digits from 1 to 9. 
(More info at: http://en.wikipedia.org/wiki/Sudoku)

Sudoku Solution Validator
Write a function validSolution/ValidateSolution/valid_solution() that accepts a 2D array representing a Sudoku board, and returns true if it is a valid solution, or false otherwise. The cells of the sudoku board may also contain 0's, which will represent empty cells. Boards containing one or more zeroes are considered to be invalid solutions.

The board is always 9 cells by 9 cells, and every cell only contains integers from 0 to 9.

Examples
validSolution([
  [5, 3, 4, 6, 7, 8, 9, 1, 2],
  [6, 7, 2, 1, 9, 5, 3, 4, 8],
  [1, 9, 8, 3, 4, 2, 5, 6, 7],
  [8, 5, 9, 7, 6, 1, 4, 2, 3],
  [4, 2, 6, 8, 5, 3, 7, 9, 1],
  [7, 1, 3, 9, 2, 4, 8, 5, 6],
  [9, 6, 1, 5, 3, 7, 2, 8, 4],
  [2, 8, 7, 4, 1, 9, 6, 3, 5],
  [3, 4, 5, 2, 8, 6, 1, 7, 9]
]); // => true
validSolution([
  [5, 3, 4, 6, 7, 8, 9, 1, 2], 
  [6, 7, 2, 1, 9, 0, 3, 4, 8],
  [1, 0, 0, 3, 4, 2, 5, 6, 0],
  [8, 5, 9, 7, 6, 1, 0, 2, 0],
  [4, 2, 6, 8, 5, 3, 7, 9, 1],
  [7, 1, 3, 9, 2, 4, 8, 5, 6],
  [9, 0, 1, 5, 3, 7, 2, 1, 4],
  [2, 8, 7, 4, 1, 9, 6, 3, 5],
  [3, 0, 0, 4, 8, 1, 1, 7, 9]
]); // => false
*/

function validSolution(board){
    // First check the rows and the columns that have unique number from 1-9 using object method
    for (var i = 0; i < board.length; i++) {
        // Create object rowValidator to check the rows and colValidator to check the columns
        var rowValidator = {};
        var colValidator = {};
        for (var j = 0; j < board[i].length; j++) {
            if (rowValidator[board[i][j]] === undefined) {
                rowValidator[board[i][j]] = 0;
            }
            if (colValidator[board[j][i]] === undefined) {
                colValidator[board[j][i]] = 0;
            }
            rowValidator[board[i][j]]++;
            colValidator[board[j][i]]++;
        }
        // If each object have been created the keys and values then we must check each key and value
        var rowKeys = Object.keys(rowValidator);
        var rowValues = Object.values(rowValidator);
        var colKeys = Object.keys(colValidator);
        var colValues = Object.values(colValidator);
        // If the keys of row and column doesn't start from 1-9 OR the values is greater than 1 then return false
        for (var k = 0; k < board.length; k++) {
            if (Number(rowKeys[k]) !== k+1 || Number(rowValues[k]) > 1){
                return false;
            }
            if (Number(colKeys[k]) !== k+1 || Number(colValues[k]) > 1){
                return false;
            }
        }
    }
    // Next we must check each cube 3x3 grid
    for (var i = 0; i < 3; i++) {
        for (var j = 0; j < 3; j++) {
            // Create cubeValidator to check each cube grid
            var cubeValidator = {};
            // Do the looping again for search the current cube using indexRow and indexCol
            for (var k = 0; k < 3; k++) {
                for (var l = 0; l < 3; l++) {
                    indexRow = (i*3) + k;
                    indexCol = (j*3) + l;
                    if (cubeValidator[board[indexRow][indexCol]] === undefined) {
                        cubeValidator[board[indexRow][indexCol]] = 0;
                    }
                    cubeValidator[board[indexRow][indexCol]]++;
                }
            }
            // If the object have completed the cube grid then we must check the keys and values
            var cubeKeys = Object.keys(cubeValidator);
            var cubeValues = Object.values(cubeValidator);
            // If the key doesn't start from 1-9 and the values is greater than 1 then return false
            for (var m = 0; m < board.length; m++) {
                if (Number(cubeKeys[m]) !== m+1 || Number(cubeValues[m]) > 1){
                    return false;
                }
                if (Number(cubeKeys[m]) !== m+1 || Number(cubeValues[m]) > 1){
                    return false;
                }
            }
        }
    }
    // If all of conditions above doesn't meet then return true
    return true;
}

console.log(validSolution(
   [[5, 3, 4, 6, 7, 8, 9, 1, 2], 
    [6, 7, 2, 1, 9, 5, 3, 4, 8],
    [1, 9, 8, 3, 4, 2, 5, 6, 7],
    [8, 5, 9, 7, 6, 1, 4, 2, 3],
    [4, 2, 6, 8, 5, 3, 7, 9, 1],
    [7, 1, 3, 9, 2, 4, 8, 5, 6],
    [9, 6, 1, 5, 3, 7, 2, 8, 4],
    [2, 8, 7, 4, 1, 9, 6, 3, 5],
    [3, 4, 5, 2, 8, 6, 1, 7, 9]])); // true
    
console.log(validSolution(
    [[5, 3, 4, 6, 7, 8, 9, 1, 2], 
     [6, 7, 2, 1, 9, 0, 3, 4, 8],
     [1, 0, 0, 3, 4, 2, 5, 6, 0],
     [8, 5, 9, 7, 6, 1, 0, 2, 0],
     [4, 2, 6, 8, 5, 3, 7, 9, 1],
     [7, 1, 3, 9, 2, 4, 8, 5, 6],
     [9, 0, 1, 5, 3, 7, 2, 1, 4],
     [2, 8, 7, 4, 1, 9, 6, 3, 5],
     [3, 0, 0, 4, 8, 1, 1, 7, 9]])); // false

//TEST CASE
// Test.assertEquals(validSolution([[5, 3, 4, 6, 7, 8, 9, 1, 2], 
//     [6, 7, 2, 1, 9, 5, 3, 4, 8],
//     [1, 9, 8, 3, 4, 2, 5, 6, 7],
//     [8, 5, 9, 7, 6, 1, 4, 2, 3],
//     [4, 2, 6, 8, 5, 3, 7, 9, 1],
//     [7, 1, 3, 9, 2, 4, 8, 5, 6],
//     [9, 6, 1, 5, 3, 7, 2, 8, 4],
//     [2, 8, 7, 4, 1, 9, 6, 3, 5],
//     [3, 4, 5, 2, 8, 6, 1, 7, 9]]), true);
    
// Test.assertEquals(validSolution([[5, 3, 4, 6, 7, 8, 9, 1, 2], 
//      [6, 7, 2, 1, 9, 0, 3, 4, 8],
//      [1, 0, 0, 3, 4, 2, 5, 6, 0],
//      [8, 5, 9, 7, 6, 1, 0, 2, 0],
//      [4, 2, 6, 8, 5, 3, 7, 9, 1],
//      [7, 1, 3, 9, 2, 4, 8, 5, 6],
//      [9, 0, 1, 5, 3, 7, 2, 1, 4],
//      [2, 8, 7, 4, 1, 9, 6, 3, 5],
//      [3, 0, 0, 4, 8, 1, 1, 7, 9]]), false);


// BEST SOLUTION
// function validSolution(board){
//     // check horizontal lines
//     for(var j=0; j<9; j++){
//       if(!check(board[j])) return false;
//     }
    
//     // check vertical lines
//     for(var j=0; j<9; j++){
//       var line = [];
//       for(var k=0; k<9; k++){
//         line.push(board[k][j]);
//       }
//       if(!check(line)) return false;
//     }
    
//     // check 3x3 squares
//     for(var j=0; j<9; j+=3){
//       for(var k=0; k<9; k+=3){
//         var square = [];
//         for(var l=j; l<j+3; l++){
//           for(var m=k; m<k+3; m++){
//             square.push(board[l][m]);
//           }
//         }
//         if(!check(square)) return false;
//       }
//     }
    
//     // if it hasn't returned false so far then we
//     // have a valid 9x9 square, so return true
//     return true;
//   }
  
//   // checks that an array of length 9 contains 
//   // exactly the numbers 1, 2, ..., 9
//   function check(numbers){
//     return numbers.slice(0).sort().every(function(e, i){return e==i+1;});
//   }