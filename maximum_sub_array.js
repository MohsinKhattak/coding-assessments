function maximumSubArray(arr){ 
let subArrays=[]

for(let i=0;i<arr.length;i++){
   
    for(let j=i;j<arr.length;j++){
        let tempArray=arr.slice(i,j+1)
        subArrays.push(tempArray) 
    }
 
 

} 
  return getMAxSubArray(subArrays)

}

function getMAxSubArray(arr){
    let maxArray=[];
    let maxSum=-Infinity; 
    
for(let i=0;i<arr.length;i++){
     let tempCount=0
    for(let j=0;j<arr[i].length;j++){
    tempCount += arr[i][j];
    } 

    if (tempCount > maxSum) {
            maxSum = tempCount;
            maxArray=arr[i]
        }
}
return maxArray;
}

const arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
const result=maximumSubArray(arr)
console.log(result)