/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */

//failed right now

var isMatch = function(s, p) {
    if (p == ".*") return true;
    if (p == s) return true;
    if (p == "") return false;
    if (p.length == 1 ) {
        if (p == "." && s.length == 1) return true;
        return false;
    }
    if (p.length == 2 && p[1] == "*") {
        for (let i = 0; i < s.length; i++) {
            if (s[i] != p[0]) return false;
        }
        return true;
    }
    if (s == "") {
        if (p.length == 2 && p[1] == "*") return true;
        if (p[p.length] != "*") return false;
        if (p[p.length] != "*") return false;
        return isMatch(s, p.slice(0, -2));
    }
    if (p[1] != "*") {
        if (p[0] == "." || p[0] == s[0]) return isMatch(s.slice(1), p.slice(1));
        return false;
    }
    if (p[0] == ".") {
        for (let j = 0; j < s.length; j++) {
            if (isMatch(s.slice(j), p.slice(2))) return true;
        }
        return false;
    }
    let k = 0;
    while (s[k] == p[0]) {
        if (isMatch(s.slice(k), p.slice(2))) return isMatch(s.slice(k), p.slice(2));
        k++
    }
    return isMatch(s.slice(k), p.slice(2));
};

const sen1 = "aabcbcbcaccbcaabc"
const sen2 = ".*a*aa*.*b*.c*.*a*"

console.log(isMatch(sen1, sen2));
