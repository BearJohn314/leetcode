var waysToSplitArray = function(nums) {
    let answer = 0
    let n = nums.length
    let total = 0
    let front = 0
    for (let i = 0; i < n; i++) {
        total += nums[i]
    }
    for (let j = 0; j < n - 1; j++) {
        front += nums[j]
        if (front >= Math.ceil(total / 2.0)) answer++
    }
    return answer
    
};