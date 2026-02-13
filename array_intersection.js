function arrayIntersection(arr1, arr2) {
    let result = [];
    let first_array_index = 0;
    let second_array_index = 0;
    debugger;
    while (first_array_index < arr1.length) {
         
        while (second_array_index < arr2.length) {
            if (arr1[first_array_index] === arr2[second_array_index]) {
                result.push(arr1[first_array_index]) 
                second_array_index++;
                first_array_index++;
            }else{
            second_array_index++;}
        }
        first_array_index++;
        second_array_index=0;
    }




    return result
}


let arr1 =[1, 3, 4, 5, 6]
let arr2 = [2, 3, 6, 7, 8]
console.log(arrayIntersection(arr1, arr2))