export 
function matrixToString(matrix:number[][]) {
  return matrix.map(row => row.join(' ')).join(' ')
}