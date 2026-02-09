function validAnagram(str, str1) {
    if (str.length !== str1.length) return false;  

    let lettersFound = 0;
    for (let i = 0; i < str.length; i++) {
        let charFound = false;
        for (let j = 0; j < str1.length; j++) { 
            if (str[i] === str1[j]) {
                lettersFound++; 
                str1 = str1.substring(0, j) + str1.substring(j + 1);    
                charFound = true;
                break;   
            }
        }
        if (!charFound) return false;   
    }
    return lettersFound === str.length;
}

let str = "silent";
let str1 = "listen";
console.log(validAnagram(str, str1));   
