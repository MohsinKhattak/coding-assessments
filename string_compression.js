function stringCompression(str){

    if(str.length===0) return '';
 let left=0;
 let result='';
 let right=0;
 let count=0;

 while(right<str.length){
    
    if(str[left]===str[right]){
         count++;
         right++;
    }

     if(str[left]!==str[right]){
        result+=str[left]+count;
        left=right;
        count=0
     }
    
 }
 return result
  
 }

 

let str="a";
console.log(stringCompression(str))