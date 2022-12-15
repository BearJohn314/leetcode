#include <string.h>
#include <iostream>
using namespace std;

class Solution {
public:
    int strStr(string haystack, string needle) {
        int needleSize = needle.size();
        int haystackSize = haystack.size();
        if (haystackSize < needleSize){
            return -1;
        }
        for (int i = 0; i < haystackSize - needleSize + 1; i++){
            if(haystack.substr(i,needleSize) == needle){
                return i;
            }
        }
        return -1;
    }
};