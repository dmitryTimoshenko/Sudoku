const fs = require('fs')

/**
 * Принимает игровое поле в формате строки — как в файле sudoku-puzzles.txt.
 * Возвращает игровое поле после попытки его решить.
 * Договорись со своей командой, в каком формате возвращать этот результат.
 */
function solve(boardString) {

}


function getMatrixBoard(str, size) {
  return str.split('').reduce((acc, currentValue, index) => {
      if (index % size === 0) {
          acc.push([]);
      }
      const lastRowIndex = acc.length - 1;
      acc[lastRowIndex].push(currentValue)
      return acc;
  }, []);
  
function findEmptyPlace(board) {
  for (let rowIndex = 0; rowIndex < board.length; rowIndex += 1) {
      const row = board[rowIndex];
      for (let colIndex = 0; colIndex < row.length; colIndex += 1) {
          if (board[rowIndex][colIndex] === '-') {
              return [rowIndex, colIndex];
          }
      }
  }
  return null;
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

