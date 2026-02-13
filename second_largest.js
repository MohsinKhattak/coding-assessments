function secondLargest(arr){
let largest=-Infinity;
let secondLargest=arr[0];

for(let i=0;i<arr.length;i++){
    if(arr[i]>largest){
        secondLargest=largest;
        largest=arr[i]
        
    }
}
return secondLargest;
}

let arr=[344,1,2,3,4,5,6,7,8,9,11,0,2,3,12,244,5,667,8]
console.log(secondLargest(arr))