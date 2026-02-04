//my appraoch

function findMissingNumber(arr) {
    arr=arr.sort((a,b)=>a-b);
    for(let i=0;i<arr.length;i++){
        if(arr[i]+1!==arr[i+1]){
            return arr[i]+1;
        }
    } 
    return null;
}


let arr = [1, 2, 4, 5, 6];
let result=findMissingNumber(arr);
console.log(result)

//optimal approach
// function findMissingNumber(arr) {
//     let n=arr.length+1;
//     let totalSum=n*(n+1)/2;
//     let arrSum=0;
//     for(let i=0;i<arr.length;i++){
//         arrSum+=arr[i];
//     }
//     return totalSum - arrSum;
// }


// let arr = [1, 2, 4, 5, 6];
// let result=findMissingNumber(arr);
// console.log(result)