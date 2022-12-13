// Given an array nums of n integers, return an array of all the unique quadruplets [nums[a], nums[b], nums[c], nums[d]] such that:
// 0 <= a, b, c, d < n
// a, b, c, and d are distinct.
// nums[a] + nums[b] + nums[c] + nums[d] == target
// You may return the answer in any order.

function twoSum(nums: number[], target: number) {
    const result:number[][] = []
    let start = 0
    let end = nums.length - 1
    while (start < end) {
        if (nums[start] + nums[end] === target) {
            result.push([nums[start], nums[end]])
            while (nums[start] === nums[start + 1]) {
                start += 1
            }
            while (nums[end] === nums[end - 1]) {
                end -= 1
            }
            start += 1
        } else if (nums[start] + nums[end] > target) {
            end -= 1
        } else {
            start += 1
        }
    }
    return result
}

function threeSum(nums: number[], target: number) {
    let result:number[][] = []
    let start = 0
    while (start < nums.length - 2) {
        let twoSumTarget = target - nums[start]
        let twoSumResult = twoSum(nums.slice(start + 1), twoSumTarget)
        let threeSumResult = twoSumResult.map(result => result.concat(nums[start]))
        result = result.concat(threeSumResult)
        while (nums[start] === nums[start + 1]) {
            start += 1
        }
        start += 1
    }
    return result
}

function fourSum(nums: number[], target: number): number[][] {
    nums.sort(function (a, b) {
        return a - b
    })
    let result:number[][] = []
    let start = 0
    while (start < nums.length - 3) {
        let threeSumTarget = target - nums[start]
        let threeSumResult = threeSum(nums.slice(start + 1), threeSumTarget)
        let fourSumResult = threeSumResult.map(result => result.concat(nums[start]))
        result = result.concat(fourSumResult)
        while (nums[start] === nums[start + 1]) {
            start += 1
        }
        start += 1
    }
    return result
};