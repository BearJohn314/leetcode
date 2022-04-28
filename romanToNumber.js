var romanToInt = function(s) {
    let roman = s.split("")
    let num = []
    for (let i=0; i<roman.length; i++) {
        switch (roman[i]) {
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
    console.log(number)
};

