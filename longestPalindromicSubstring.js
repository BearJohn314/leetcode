var longestPalindrome = function(s) {
    if (isPalindrome(s)) return s
    let current = ""
    let length = 0
    for (let i = 0; i < s.length; i++) {
        for (let j = s.length; j - i > length; j--) {
            if (isPalindrome(s.slice(i,j))) {
                current = s.slice(i,j)
                length = current.length
            }
        }
    }
    return current
};  

var isPalindrome = function(head) {
    for (let i = 0; i < head.length/2; i++) {
        if (head[i] != head[head.length-1-i]) return false
    }
    return true
};