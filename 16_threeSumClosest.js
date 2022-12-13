var threeSumClosest = function(nums, target) {
    nums.sort(function compare(a,b) {
        return a - b;
    })
    let answer = nums[0] + nums[1] + nums[2]
    let difference = Math.abs(target - answer)
    let n = nums.length
    for (let i = 0; i < n - 2; i++) {
        let j = i + 1;
        let k = n - 1;
        while (j < k) {
            sum = nums[i] + nums[j] + nums[k];
            if (Math.abs(sum - target) < difference) {
                difference = Math.abs(sum - target)
                answer = sum
            }
            if (sum - target == 0) {
                return answer;
            }
            else if (sum - target > 0) {
                k--;
            }
            else {
                j++;
            }
        }
    }
    return answer;
};