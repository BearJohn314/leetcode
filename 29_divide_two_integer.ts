// Given two integers dividend and divisor, divide two integers without using multiplication, division, and mod operator.

// The integer division should truncate toward zero, which means losing its fractional part. For example, 8.345 would be truncated to 8, and -2.7335 would be truncated to -2.

// Return the quotient after dividing dividend by divisor.

// Note: Assume we are dealing with an environment that could only store integers within the 32-bit signed integer range: [−2**31, 2**31 − 1]. For this problem, if the quotient is strictly greater than 2**31 - 1, then return 2**31 - 1, and if the quotient is strictly less than -2**31, then return -2**31.

// Method 1, slow
// function divide(dividend: number, divisor: number): number {
//     let count = 0
//     let step = divisor === Math.abs(divisor) ? 1 : -1
//     divisor = Math.abs(divisor)
//     if (dividend > 0){
//         while (dividend >= divisor){
//             dividend -= divisor
//             count += step
//         }
//     }else{
//         while (dividend <= -divisor){
//             dividend += divisor
//             count -= step
//         }
//     }
//     if (count > 2**31 - 1){return 2**31 - 1}
//     if (-(2**31)>count){return -(2**31)}
//     return count
// };

function divide(dividend: number, divisor: number): number {
    const negative = (dividend > 0) !== (divisor > 0)
    dividend = Math.abs(dividend)
    divisor = Math.abs(divisor)
    let count = 0
    while (dividend >= divisor){
        let newDivisor = divisor
        let times = 1
        while (dividend >= newDivisor + newDivisor){
            newDivisor = newDivisor + newDivisor
            times = times + times
        }
        dividend = dividend - newDivisor
        count = count + times
    }
    if (negative){return Math.max(-count,-(2**31))}
    return Math.min(count, 2**31 - 1)
}