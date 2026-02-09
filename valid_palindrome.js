function palindrome(str){
    let middle = Math.floor(str.length / 2); 
    let i=0;
    let j=str.length-1;

    while(i<middle){  
        if(str[i]===str[j]){
            i++;
            j--;
        }else{
            return false
        }
    }
    return true
   
}

console.log(palindrome("racecar"))