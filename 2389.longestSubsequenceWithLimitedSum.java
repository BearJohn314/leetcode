import java.util.Arrays;

class Solution {
    public int[] answerQueries(int[] nums, int[] queries) {
        Arrays.sort(nums);
        int results[] = new int[queries.length];
        for (int i = 0; i<queries.length;i++){
            int count = 0;
            int sum = 0;
            while (count<nums.length && sum+nums[count] <= queries[i]){
                sum+=nums[count];
                count++;
            }
            results[i] = count;
        }
        return results;
    }
}