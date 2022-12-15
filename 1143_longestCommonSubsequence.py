class Solution:
    def longestCommonSubsequence(self, text1: str, text2: str) -> int:
        lengthOfText1 = len(text1)
        lengthOfText2 = len(text2)
        dp = []
        for i in range(lengthOfText1 + 1):
            col = []
            for j in range(lengthOfText2 + 1):
                col.append(0)
            dp.append(col)
        for x in range(1,lengthOfText1+1):
            for y in range(1,lengthOfText2+1):
                if text1[x-1] == text2[y-1]:
                    dp[x][y] = 1 + dp[x-1][y-1]
                else:
                    dp[x][y] = max(dp[x-1][y],dp[x][y-1])
        return dp[lengthOfText1][lengthOfText2]
