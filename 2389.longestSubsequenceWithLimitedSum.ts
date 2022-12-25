/*
Runtime 96 ms Beats 88.24%
Memory 46.1 MB Beats 47.6%
*/

function answerQueries(nums: number[], queries: number[]): number[] {
    nums.sort((a,b)=>{return a-b})
    const result:number[] = []
    for (let num of queries){
        let count = 0
        let sum = 0
        while (sum+nums[count] <= num && count < nums.length){
            sum+=nums[count]
            count++
        }
        result.push(count)
    }
    return result
};