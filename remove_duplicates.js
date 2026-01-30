function removeDuplicate(arr){
for(let i=0;i<arr.length;i++){
    for (let j=i+1;j<arr.length;j++){
        if(arr[i]===arr[j]){
            arr.splice(j,1)
        }
    }
}
return arr;
}



let arr=[1, 2, 3, 1, 4, 2, 1];
let result=removeDuplicate(arr);
console.log(result)