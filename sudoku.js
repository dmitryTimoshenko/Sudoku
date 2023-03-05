const fs = require('fs')

/**
 * Принимает игровое поле в формате строки — как в файле sudoku-puzzles.txt.
 * Возвращает игровое поле после попытки его решить.
 * Договорись со своей командой, в каком формате возвращать этот результат.
 */
function solve(boardString) {
console.log(boardString)
return boardString
}

/**
 * Принимает игровое поле в том формате, в котором его вернули из функции solve.
 * Возвращает булевое значение — решено это игровое поле или нет.
 */
function isSolved(board) {


  
}
   



/**
 * Принимает игровое поле в том формате, в котором его вернули из функции solve.
 * Возвращает строку с игровым полем для последующего вывода в консоль.
 * Подумай, как симпатичнее сформировать эту строку.
 */
function prettyBoard(board) {

}

// function foo(text){
//   console.log(text)
//   return text
// }
// console.log(solve(text))
// Экспортировать функции для использования в другом файле (например, readAndSolve.js).
module.exports = {
  solve,
  isSolved,
  prettyBoard,
};


let array = [[5, 3, '-'],
             [6, '-', '-'],
             ['-', 9, 8]];





const foo = arr => {
  let arrCopy = JSON.parse(JSON.stringify(array))
  let hollowCellsIndex = [];
  let usedNums = [];
  for (let i = 0; i < arr.length; i += 1) {
    for (let j = 0; j < arr[i].length; j += 1) {
      if (arr[i][j] === '-') hollowCellsIndex.push([i, j]);
      if (arr[i][j] !== '-') usedNums.push(arr[i][j]);
    }
  }
  // console.log(array[1][0]);
  return [hollowCellsIndex, usedNums];
};

console.log(foo(array));
