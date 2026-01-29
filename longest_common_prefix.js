function longestCommonPrefix(strs) {
     if (strs.length === 0) return ""; 
     let matchingPrefix = strs[0];

    for (let i = 1; i < strs.length; i++) {
        let lettersToKeep = 0;

        for (let j = 0; j < matchingPrefix.length; j++) {
            if (strs[i][j] === matchingPrefix[j]) {
                lettersToKeep++;
            } else {
                break
            }
        }

        matchingPrefix = matchingPrefix.substring(0, lettersToKeep);



if(matchingPrefix===""){
    break;
}
      
    }
    
    return matchingPrefix;

}



const strs = ["saad", "saa", "sa"];
const result = longestCommonPrefix(strs);
console.log(result)