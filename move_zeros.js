function moveZeroes(){ 
    let start=0;


    for(let i=1;i<arr.length;i++){
        if(arr[i]!==0){
            let temp=arr[i];
            arr[i]=arr[start];
            arr[start]=temp;
            start++;
        }
    }
 
    return arr

}


let arr=[0, 1, 0, 3, 12];
let result=moveZeroes(arr);
console.log(result)