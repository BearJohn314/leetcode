var myAtoi = function(s) {
    let answer = parseInt(s)
    if (!answer) return 0
    if (answer > 2**31 -1) return 2**31 -1
    if (answer < -(2**31)) return -(2**31)
    return answer
};