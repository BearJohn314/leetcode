var reverse = function(x) {
    let numString = x.toString()
    let reverse = numString.split("").reverse().join("")
    let answer = parseInt(reverse)
    if (x < 0 && answer < 2**31) return -answer
    if (x > 0 && answer < 2**31 - 1) return answer
    return 0
};