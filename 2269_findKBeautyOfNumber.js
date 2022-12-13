var divisorSubstrings = function(num, k) {
    let numString = num.toString()
    let n = numString.length
    let answer = 0
    for (let i = 0; i < n - k + 1; i++) {
        let sub = numString.substring(i, i + k)     
        if (num % sub == 0 && sub != 0) answer++
    }
    return answer
};