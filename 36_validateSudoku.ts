/*
Runtime 77 ms Beats 97.24%
Memory 47.7 MB Beats 34.98%
*/

// version 1: using array to store the values of numbers in each columns and boxes
// function isValidSudoku(board: string[][]): boolean {
//     let columns: string[][] = []
//     /* boxes is indexed by
//     [[0,1,2],
//     [3,4,5],
//     [6,7,8]]
//     */
//     let boxes: string[][] = []
//     for (let i=0; i<9; i++){
//         columns.push([])
//         boxes.push([])
//     }
//     for (let row = 0; row<9; row++){
//         if (!validateArray(board[row].filter(entry=>entry!=="."))){return false}
//         for (let column = 0; column<9; column++){
//             if(board[row][column]!=="."){
//                 columns[column].push(board[row][column])
//                 boxes[(Math.floor(column/3))*3+Math.floor(row/3)].push(board[row][column])
//             }
//         }
//     }
//     for (let i=0; i<9; i++){
//         if (!validateArray(columns[i])){return false}
//         if (!validateArray(boxes[i])){return false}
//     }
//     return true
// };

// function validateArray(arr: string[]):boolean {
//     // set removes all duplicates in the array
//     const set = new Set(arr)
//     return set.size === arr.length
// }

/* 
Runtime 84 ms Beats 92.31%
Memory 44.7 MB Beats 99.42%
*/

// version 2: using number instead to store the numbers in each column row and boxes

function isValidSudoku(board: string[][]): boolean {
    let rows: number[] = []
    let columns: number[] = []
    let boxes: number[] = []
    for (let i=0; i<9; i++){
        rows.push(0)
        columns.push(0)
        boxes.push(0)
    }
    for (let row = 0; row<9; row++){
        for (let column = 0; column<9; column++){
            if(board[row][column]!=="."){
                let value = 2**(+board[row][column] - 1)
                let box = (Math.floor(column/3))*3+Math.floor(row/3)
                if(rows[row]&value || columns[column]&value || boxes[box]&value){
                    return false
                }
                rows[row] += value
                columns[column] += value
                boxes[box] += value
            }
        }
    }
    return true
};