var letterCombinations = function(digits) {
    let length = digits.length
    if (length == 0) return []

    let d1 = digits[0];
    let a1 = assignAlphabet(d1);
    if (digits.length == 1) return a1
    let solution = [];
    let d2 = digits[1];
    let a2 = assignAlphabet(d2);
    if (length == 2) {
        for (let i1 of a1) {
            for (let i2 of a2) {
                solution.push(i1+i2)
            }
        }
        return solution
    }
    let d3 = digits[2];
    let a3 = assignAlphabet(d3);
    if (length == 3) {
        for (let i1 of a1) {
            for (let i2 of a2) {
                for (let i3 of a3) {
                    solution.push(i1+i2+i3)
                }
            }
        }
        return solution
    }
    let d4 = digits[3];
    let a4 = assignAlphabet(d4);
    for (let i1 of a1) {
        for (let i2 of a2) {
            for (let i3 of a3) {
                for (let i4 of a4) {
                    solution.push(i1+i2+i3+i4)
                }
            }
        }
    }
    return solution
}

let assignAlphabet = function(digit) {
    switch(digit) {
        case "":
            return []
        case '2':
            return ['a', 'b', 'c']
        case '3':
            return ['d', 'e', 'f']
        case '4':
            return ['g', 'h', 'i']
        case '5':
            return ['j', 'k', 'l']
        case '6':
            return ['m', 'n', 'o']
        case '7':
            return ['p', 'q', 'r', 's']
        case '8':
            return ['t', 'u', 'v']
        case '9':
            return ['w', 'x', 'y', 'z']
    }
}