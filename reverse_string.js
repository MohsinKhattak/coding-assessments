 function reverseString(str){
    let reversed="";
    for(let i=str.length-1;i>=0;i--){
reversed+=str.charAt(i)
    }
    return reversed;
 }

 let str="hello world";
 console.log(reverseString(str));  