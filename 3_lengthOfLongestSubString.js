// Given a string s, find the length of the longest substring without repeating characters.

function lengthOfLongestSubstring(s) {
    let seenIt = {};
    let p1 = 0;
    let p2 = 0;
    let result = 0;
  
    while (p2 < s.length) {
      if (seenIt[s[p2]] === undefined) {
        seenIt[s[p2]] = p2;
        p2++;
        result = Math.max(p2 - p1, result);
      } else {
        delete seenIt[s[p1]];
        p1++;
      }
    }
  return result;
  };