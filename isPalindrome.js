var isPalindrome = function(head) {
    for (let i = 0; i < head.length/2; i++) {
        if (head[i] != head[head.length-1-i]) return false
    }
    return true
};