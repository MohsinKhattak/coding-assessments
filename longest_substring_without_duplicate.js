//my solution
function longestSubstring(str) {
    let substrings = []
    for (let i = 0; i < str.length; i++) {
        for (let j = i; j < str.length; j++) {
            let tempStr = str.slice(i, j + 1)

            substrings.push(tempStr)
        }
    }

    return getMaxSubstring(substrings)
}
function getMaxSubstring(arr) { 
    let longestStr = ''

    for (let i = 0; i < arr.length; i++) {
        tempStr = ''
        for (let j = 0; j < arr[i].length; j++) {

            if (tempStr.includes(arr[i][j])) {
                break; 
            } else {
                tempStr += arr[i][j]  
            }
        }
        if (tempStr.length > longestStr.length) {
            longestStr = tempStr;

        }

    }
return longestStr;
}


let str = "abcabcbb";
console.log(longestSubstring(str))