function mergeSortedArray(arr,arr2){
    let i=0;
    let j=0;
    let mergedArray=[];

while(i<arr.length && j<arr2.length){
    if(arr[i]<arr2[j]){
        mergedArray.push(arr[i]);
        i++;
    } else {
        mergedArray.push(arr2[j]);
        j++;
    }   
 
    while (i < arr.length) {
        mergedArray.push(arr[i]);
        i++;
    } 
    while (j < arr2.length) {
        mergedArray.push(arr2[j]);
        j++;
    }

}
    
    return mergedArray;

}


let arr1=[1,3,5];
let arr2=[2,4,6,7,8,9];
let result=mergeSortedArray(arr1,arr2);
console.log(result)