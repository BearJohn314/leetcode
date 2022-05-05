var maxArea = function(height) {
    let area = Math.min(height[0],height[height.length - 1]) * (height.length - 1);
    let highestIndex = 0;
    for (let i = 0; i < height.length; i++) {
        if (height[i] > height[highestIndex]) highestIndex = i;
    }
    let left = 0;
    for (let i = 0; i <= highestIndex; i++) {
        if (height[left] > height[i]) continue;
        left = i;
        let right = height.length - 1;
        for (let j = height.length - 1; j >= highestIndex; j--) {
            if (height[right] > height[j]) continue;
            right = j;
            area = Math.max(area, Math.min(height[left], height[right]) * (right - left));
            }
        }
    return area;
};