/*
Runtime 68 ms Beats 95.7%
Memory 44.7 MB Beats 43.57%
*/

function isValid(args: string): boolean {
    const pair = {
    "(":")",
    "{":"}",
    "[":"]",
    }
    let matching: Array<string> = []
    for (let arg of args) {
        if(matching.length == 0) {
            if (Object.keys(pair).includes(arg)){matching.push(arg);}
            else {return false}
        } else if(pair[matching[matching.length - 1]]!==arg) {
            matching.push(arg);
        } else {
            matching.pop();
        }
    }
    if (matching.length == 0){return true}
    return false;
}