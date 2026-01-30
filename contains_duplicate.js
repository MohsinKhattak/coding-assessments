function containsDuplicates(arr){
    let map=new Map();

    for(let i=0;i<arr.length;i++){
        if(map.has(arr[i])){
            return true
        };
        map.set(arr[i], (map.get(arr[i]) || 0) + 1)
    }

return false;
}

let arr= [1, 2, 3, 1] ;
let result=containsDuplicates(arr);
console.log(result)