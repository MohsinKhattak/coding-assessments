function findTwoSum(arr,target){
let map=new Map(); 

for(let i=0;i<arr.length;i++){
    complement=target-arr[i];

    if(map.has(complement)){
        return [map.get(complement),i];
    }

    map.set(arr[i],i)
}

return [];

}


const arr=[1,5,7,9,10,11];
const target=10;
console.log(findTwoSum(arr,target))


