function flatArray(arr){
    let result=[];
    for(let i=0;i<arr.length;i++){
        if(typeof(arr[i])==="number"){
            result.push(arr[i]);
        }else if(Array.isArray(arr[i])){
            result=result.concat(flatArray(arr[i]))
        }
    }
return result;
}


let example=[1,2,3,[3,[4]]];
console.log(flatArray(example));