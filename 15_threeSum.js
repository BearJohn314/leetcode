// function threeSumV3(nums) {
//     nums.sort((a,b) => a - b)

//     let result = new Map()
//     // for ( let i = 0; i < nums.length; i++) {
//     //     let a = nums[i]
//     //     if (a < 0 && mid == -1) {
//     //         continue
//     //     }
//     //     for (let j = mid; j < num.length; j++) {
//     //         let b = nums[j]
//     //         let sum = a + b
//     //         for (let k = j + 1; k < nums.length; k++) {
//     //             let c = nums[k]
//     //             let sum = a + b + c
//     //             if (sum == 0) {
//     //                 let tuple = [a,b,c]
//     //                 tuple.sort()
//     //                 let key = tuple.toString()
//     //                 result.set(key, tuple)
//     //             }
//     //         }
//     //     }
//     // }
//     return Array.from(result.values())
// }

// function threeSumV2(nums) {
//     nums.sort((a,b) => a - b)

//     let result = new Map()

//     let mid = nums.findIndex( num => num > 0)

//     function findPos() {}

//     function twoSum(target, excludeIndex) {
//         for (let i = excludeIndex + 1; i < nums.length; i++) {
//             if ( i == excludeIndex) continue
//             let a = nums[i]
//             for (let j = i + 1; j < nums.length; j++) {
//                 if ( j == excludeIndex) continue
//                 let b = nums[j]
//                 let sum = a + b
//                 if (sum == target) {
//                     let tuple = [-target, a, b]
//                     tuple.sort()
//                     let key = tuple.toString()
//                     result.set(key, tuple)
//                 }
//             }
//         }
//         return
//     }

//     for (let i = 0; i < nums.length; i++) {
//         let a = nums[i]
//         let target = -a
//         twoSum(target, i)
//         if (a < 0) {
//             // a < 0, we need to find pos number

//         } else if (a > 0) {
//             // a > 0, we need to find neg number

//             break
//         } else {
//             // a = 0, find two sum = 0
//             let target = 0
//             twoSum(target, i)
//         }
//     }
//     return Array.from(result.values())
// }

// function threeSumV3(nums) {

//     let counts = new Map()

//     let tuples = new Map()

//     for (let i = 0; i < nums.length; i++) {
//         let num = nums[i]
//         let count = counts.get(num) || 0
//         count ++
//         counts.set(num, count)
//     }

//     let results = []

//     for (let i = 0; i < nums.length; i++) {
//         let a = nums[i]

//         let target = -a

//         for (let j = 0; j < nums.length; j++) {
//             if (i == j) continue
//             let b = nums[j]
//             let c = target - b
//             let count = counts.get(c)
//             let minCount
//             if (a!=c && b!=c) {
//                 minCount = 1
//             } else if (a==0 && b ==0) {
//                 minCount = 3
//             } else {
//                 minCount = 2
//             }
//             if(count >= minCount) {
//                 let tuple = [a,b,c]
//                 tuple.sort()
//                 let key = tuple.toString()
//                 tuples.set(key, tuple)
//             }
//         }
//     }


//     return Array.from(tuples.value)
// }

var threeSum = function(nums) {
    if (nums.length <3) return [];
    let solution = [];
    let number = 0;
    let n = nums.length;
    nums.sort(function compare(a, b) {
        return a - b;
    })
    for (let i = 0; i < n - 2; i++) {
        let j = i + 1;
        let k = n - 1;
        while (j < k) {
            let sum = nums[i] + nums[j] + nums[k];
            if (sum == 0) {
                answer = [nums[i], nums[j], nums[k]];
                if (!solution.some(a => answer.every((v, i) => v == a[i]))) {
                    solution.push(answer);
                }
                k--;
            }
            else if (sum > 0) {
                k--;
            }
            else j++;
        }
    }
    return solution;
};