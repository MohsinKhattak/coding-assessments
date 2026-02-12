function reverseArray(arr){
  let middle = Math.floor(arr.length / 2);
    let left=0;
    let right=arr.length-1; 
    while(left<middle){
        let temp=arr[left];
        arr[left]=arr[right];
        arr[right]=temp;
        left++;
        right--;
        
    }
    return arr

}


let arr=[1,2,3,4,5,6,7,8,9];
console.log(reverseArray(arr))