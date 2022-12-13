var largestCombination = function(candidates) {
    let answer = 0
    while (candidates.length > 0) {
        let check = 0;
        for (let i = 0; i < candidates.length; i++) {
            check += candidates[i] % 2
            candidates[i] = Math.floor(candidates[i] / 2)
        }
        if (check > answer) answer = check
        candidates = candidates.filter(x => x > 0)
    }
    return answer
};