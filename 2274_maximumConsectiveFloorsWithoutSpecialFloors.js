var maxConsecutive = function(bottom, top, special) {
    special.sort(function compare(a, b) {
        return a - b
    })
    let n = special.length
    let answer = Math.max(special[0] - bottom, top - special[n - 1])
    for (let i = 0; i < special.length - 1; i++) {
        let diff = special[i + 1] - special[i] - 1
        if (diff > answer) answer = diff
    }
    return answer
};