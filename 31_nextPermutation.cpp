#include <bits/stdc++.h>
using namespace std;

class Solution {
public:
    void nextPermutation(vector<int>& nums) {
        int length = nums.size();
        int lastAccending = -1;
        for (int i = 0; i < length - 1; i++){
            if (nums[i+1]>nums[i]){
                lastAccending = i;
            }
        }
        if (lastAccending > -1){
            int temp = nums[lastAccending];
            int idx = lastAccending + 1;
            int smallest = nums[lastAccending + 1];
            for (int j = lastAccending + 1; j < length; j++){
                if (temp < nums[j] && nums[j] <= smallest){
                    idx = j;
                    smallest = nums[j];
                }
            }
            nums[lastAccending] = nums[idx];
            nums[idx] = temp;
            reverse(nums.begin() + lastAccending + 1,nums.end());
        }else{
            reverse(nums.begin(), nums.end());
        }
    }
};