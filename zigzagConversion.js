var convert = function(s, numRows) {
    if (numRows == 1 || s.length <= numRows) return s
    let rows = []
    let row = 0
    let move = -1
    for (i = 0; i < s.length; i++) {
        if (rows[row] == undefined) {
            rows[row] = s[i]
        } else rows[row] += s[i]
        if ((row == 0) || (row == numRows - 1)) move = -move
        row += move
    }
    let answer = ""
    for (let ele of rows) {
        answer += ele
    }
    return answer
};