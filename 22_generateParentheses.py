class Solution:
    def generateParenthesis(self, n: int) -> List[str]:
        result = []
        def generate(str,left,right):
            if left == 0:
                result.append(str+")"*right)
                return
            generate(str+"(",left - 1, right)
            if left < right:
                generate(str+")",left,right-1)
        generate("",n,n)
        return result