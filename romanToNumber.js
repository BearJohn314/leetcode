var romanToInt = function(s) {
    let num = []
    for (let i=0; i<s.length; i++) {
        switch (s[i]) {
            case "I": 
                num.push(1)
                break
            case "V": 
                num.push(5)
                break
            case "X": 
                num.push(10)
                break
            case "L": 
                num.push(50)
                break
            case "C": 
                num.push(100)
                break
            case "D": 
                num.push(500)
                break
            case "M": 
                num.push(1000)
                break
        }
    }
    // let number = num[0]
    // for (let i = 1; i < num.length; i++) {
    //     if (num[i-1] >= num[i]) {
    //         number += num[i]
    //     }else {
    //         number = number + num[i] - num[i-1]*2
    //     }
    // }
    let number = num.reduce((a, b) => a + b, 0)
    for (let i = 1; i < num.length; i++) {
        if (num[i-1] < num[i]) {
            number = number - num[i-1]*2
        }
    }
    return number
};

//slow version by using object

// var romanToInt = function(s) {
//     let roman = {
//         I: 1,
//         V: 5,
//         X: 10,
//         L: 50,
//         C: 100,
//         D: 500,
//         M: 1000
//     }
//     let myList = ["IV", "IX", "XL", "XC", "CD", "CM"]
//     let number = 0
//     for (let i = 0; i < s.length-1; i++) {  
//         let check = s[i] + s[i+1]
//         if (myList.includes(check)) {
//             number -= roman[s[i]]
//         }else {
//             number += roman[s[i]]
//         }
//     }
//     number += roman[s[s.length-1]]
//     return number
// };