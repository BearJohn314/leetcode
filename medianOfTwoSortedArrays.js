var findMedianSortedArrays = function(nums1, nums2) {
    const nums = nums1.concat(nums2)
    nums.sort(function(a,b) {
        return a - b
    })
    let a = nums.length
    if (a % 2 == 1) return nums[(a - 1) / 2]
    return (nums[a/2] + nums[a/2 - 1]) / 2
};