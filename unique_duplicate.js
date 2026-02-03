function uniqueDuplicate(arr){
let hshMap=new Map();
let result=[]
  for (let i = 0; i < arr.length; i++) {
        if (hshMap.has(arr[i])) { 
            if (hshMap.get(arr[i]) === 1) {
                result.push(arr[i]);
            } 
            hshMap.set(arr[i], hshMap.get(arr[i]) + 1);
        } else { 
            hshMap.set(arr[i], 1);
        }} 

 
return result;
}


let arr = [10, 20, 30, 20, 40, 30, 10];
let result=uniqueDuplicate(arr);
console.log(result)