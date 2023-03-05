const fs = require('fs')

/**
 * Принимает игровое поле в формате строки — как в файле sudoku-puzzles.txt.
 * Возвращает игровое поле после попытки его решить.
 * Договорись со своей командой, в каком формате возвращать этот результат.
 */

function solvePuzzle(boardString) {}

function solve(board, size) {
  
  const emptyCell = findEmptyPlace(board);

  if (emptyCell === null) {
    return board;
  }

  for (let i = 1; i <= size; i += 1) {
    const possibleValue = String(i);

    const [rowIndex, colIndex] = emptyCell;
    let isValid = true;

    const possibleRowValues = {};
    const possibleColValues = {};

    for (let j = 0; j < size; j += 1) {
      if (board[j][colIndex] !== "-") {
        if (possibleRowValues[board[j][colIndex]]) {
          return false;
        } else {
          possibleRowValues[board[j][colIndex]] = true;
        }
      }
      if (board[j][colIndex] === possibleValue && j !== rowIndex) {
        isValid = false;
      }
    }

    if (!isValid) {
      continue;
    }

    for (let j = 0; j < size; j += 1) {
      if (board[rowIndex][j] !== "-") {
        if (possibleColValues[board[rowIndex][j]]) {
          return false;
        } else {
          possibleColValues[board[rowIndex][j]] = true;
        }
      }

      if (board[rowIndex][j] === possibleValue && j !== colIndex) {
        isValid = false;
      }
    }

    if (!isValid) {
      continue;
    }

    const boxSize = Math.sqrt(size);
    const startBoxRow = Math.floor(rowIndex / boxSize) * boxSize;
    const startBoxCol = Math.floor(colIndex / boxSize) * boxSize;

    for (let j = startBoxRow; j < startBoxRow + boxSize; j += 1) {
      for (let k = startBoxCol; k < startBoxCol + boxSize; k += 1) {
        if (board[j][k] === possibleValue && j !== rowIndex && k !== colIndex) {
          isValid = false;
        }
      }
    }

    if (isValid) {
      board[rowIndex][colIndex] = possibleValue;

      if (solve(board, size)) {
        return true;
      }

      board[rowIndex][colIndex] = "-";
    }
  }

  return false;

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

function isSolved(board) {}


/**
 * Принимает игровое поле в том формате, в котором его вернули из функции solve.
 * Возвращает строку с игровым полем для последующего вывода в консоль.
 * Подумай, как симпатичнее сформировать эту строку.
 */

function prettyBoard(board) {}



// Экспортировать функции для использования в другом файле (например, readAndSolve.js).
module.exports = {
  solvePuzzle,
  isSolved,
  prettyBoard,
};

