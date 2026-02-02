function rotateArray(arr, k) { 
let current=arr[0];
    for(let i=0;i<k;i++)
    {
         for(let i=0;i<arr.length-1;i++){
         let temp=arr[i+1];
         arr[i+1]=current;
        current=temp; 

        if(i===arr.length-2){
            arr[0]=current
        }  
     }
    }
     return arr
}


let arr = [1, 2, 3, 4, 5, 6, 7];
let k = 3;
let result = rotateArray(arr, k);
console.log(result);