//! Problem 4 solution

//* Solution 1
function snake1(n, m) {
  let matrix = [];

  for (let i = 0; i < n; i++) {
    let row = [];
    for (let j = 0; j < m; j++) {
      if (i % 2 == 0) row.push(m * i + j);
      else row.push(m * (i + 1) - (j + 1));
    }
    matrix.push(row);
  }

  return matrix;
}

console.log(snake1(5, 4));

//* Solution 2
function snake2(n, m) {
  let res = [];
  let count = 0;

  for (let i = 0; i < n; i++) {
    let row = [];
    for (let j = 0; j < m; j++) {
      row.push(count++);
    }
    res.push(row);
  }

  for (let i = 0; i < n; i++) {
    if (i % 2 === 1) res[i].reverse();
  }

  return res;
}

let n = 5,
  m = 2,
  x = 3,
  y = 1;

console.log(snake2(n, m)[x - 1][y - 1]);

//! Problem 5 solution

function spiralMatrix(n) {
  const matrix = [];
  for (let i = 0; i < n; i++) {
    matrix.push([]);
    for (let j = 0; j < n; j++) {
      matrix[i].push(0);
    }
  }

  let count = 1;
  let startRow = 0;
  let endRow = n - 1;
  let startCol = 0;
  let endCol = n - 1;

  while (startRow <= endRow && startCol <= endCol) {
    // top row
    for (let i = startCol; i <= endCol; i++) {
      matrix[startRow][i] = count;
      count++;
    }
    startRow++;

    // right column
    for (let i = startRow; i <= endRow; i++) {
      matrix[i][endCol] = count;
      count++;
    }
    endCol--;

    // bottom row
    for (let i = endCol; i >= startCol; i--) {
      matrix[endRow][i] = count;
      count++;
    }
    endRow--;

    // left column
    for (let i = endRow; i >= startRow; i--) {
      matrix[i][startCol] = count;
      count++;
    }
    startCol++;
  }

  return matrix;
}

let len = 5,
  i = 4,
  j = 2;

console.log(spiralMatrix(len, len)[i - 1][j - 1]);
