// Recursive Method
// var longestCommonPrefix = function(strs) {
//     if (strs[0] == "") return "";
//     let subStrs = [];
//     subStrs[0] = strs[0].slice(1);
//     for (let i = 1; i < strs.length; i++) {
//         if (strs[i][0] != strs[0][0]) return "";
//         subStrs[i] = strs[i].slice(1);
//     }
//     return strs[0][0] + longestCommonPrefix(subStrs);
// };

// Iterate Method
var longestCommonPrefix = function(strs) {
    let prefix = "";
    for (let i = 0; i < strs[0].length; i++) {
        let broke = false;
        for (let j = 1; j < strs.length; j++) {
            if (strs[j][i] != strs[0][i]) {
                broke = true;
                break;
            }
        }
        if (broke) break;
        prefix += strs[0][i];
    }
    return prefix;
}