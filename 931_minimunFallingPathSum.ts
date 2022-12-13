// Given an n x n array of integers matrix, return the minimum sum of any falling path through matrix.

// A falling path starts at any element in the first row 
// and chooses the element in the next row 
// that is either directly below or diagonally left/right. 
// Specifically, the next element from position (row, col) will be (row + 1, col - 1), (row + 1, col), or (row + 1, col + 1).

// Real-life usage: Seam carving for resizing the images

function minFallingPathSum(matrix: number[][]): number {
    for (let layer=matrix.length-2;layer>=0;layer--){
        for (let position=0;position < matrix[layer].length;position++){
            if (position === 0){
                matrix[layer][position] = Math.min(matrix[layer+1][position],matrix[layer+1][position+1])+matrix[layer][position]
            }else if (position === matrix[layer].length-1){
                matrix[layer][position] = Math.min(matrix[layer+1][position],matrix[layer+1][position-1])+matrix[layer][position]
            }else{
                matrix[layer][position] = Math.min(matrix[layer+1][position],matrix[layer+1][position-1],matrix[layer+1][position+1])+matrix[layer][position]
            }
        }
    }
    const result = matrix[0].reduce((min,next)=>Math.min(min,next),matrix[0][0])
    return result
};