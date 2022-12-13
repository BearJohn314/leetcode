// Approach 1
// var maxArea = function(height) {
//     let area = Math.min(height[0],height[height.length - 1]) * (height.length - 1);
//     let highestIndex = 0;
//     for (let i = 0; i < height.length; i++) {
//         if (height[i] > height[highestIndex]) highestIndex = i;
//     }
//     let left = 0;
//     for (let i = 0; i <= highestIndex; i++) {
//         if (height[left] > height[i]) continue;
//         left = i;
//         let right = height.length - 1;
//         for (let j = height.length - 1; j >= highestIndex; j--) {
//             if (height[right] > height[j]) continue;
//             right = j;
//             area = Math.max(area, Math.min(height[left], height[right]) * (right - left));
//             if (height[right] > height[left]) break;
//             }
//         if (height[left] > height[right]) break;
//         }
//     return area;
// };

// Approach 2
// var maxArea = function(height) {
//     let left = 0;
//     let right = height.length - 1;
//     let area = Math.min(height[left], height[right]) * (right - left);
//     let change = true;
//     while (change) {
//         change = false;
//         if (height[left] < height[right]) {
//             for (let i = left + 1; i <= right; i++) {
//                 if (height[i] > height[left]) {
//                     left = i;
//                     area = Math.max(area, Math.min(height[left], height[right]) * (right - left));
//                     change = true;
//                     break;
//                 }
//             }
//         } else {
//             for (let j = right - 1; j >= left; j--) {
//                 if (height[j] > height[right]) {
//                     right = j;
//                     area = Math.max(area, Math.min(height[left], height[right]) * (right - left));
//                     change = true;
//                     break;
//                 }
//             }
//         }
//     }
//     return area;
// };

// O(n) solution
var maxArea = function(height) {
    let left = 0;
    let right = height.length - 1;
    let area = Math.min(height[left], height[right]) * (right - left);
    while (left < right) {
        if (height[left] < height[right]) {
            left++;
            
        } else {
            right--;
        }
        area = Math.max(area, Math.min(height[left], height[right]) * (right - left));
    }
    return area;
};