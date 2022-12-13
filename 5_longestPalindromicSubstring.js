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

//second approach
// var longestPalindrome = function(s) {
//     if (isPalindrome(s)) return s
//     let length = s.length - 1
//     while (true) {
//         for (let i = 0; i <= s.length - length; i++) {
//         if (isPalindrome(s.slice(i , i + length))) return s.slice(i, i + length)
//         }
//         length--
//     }
// };  