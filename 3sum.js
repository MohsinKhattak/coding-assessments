function threeSum(arr, target) {
    arr.sort((a, b) => a - b);
    let result = []
    for (let i = 0; i < arr.length - 2; i++) {
        if (i > 0 && arr[i] === arr[i - 1]) continue;
        let left = i+1;
        let right = arr.length - 1;


        while (left < right) {
            let sum = arr[i] + arr[left] + arr[right];

            if (sum === target) {
                result.push([arr[left], arr[i], arr[right]])

                while (left < right && arr[left] === arr[left + 1]) left++;

                while (left < right && arr[right] === arr[right - 1]) right--;


                left++;
                right--;
            } else if (sum < target) {
                left++
            } else {
                right--;
            }
        }
    }
    return result;

}

let arr = [-5, 2, 1, 4, -1, 0, 3];
let target = 3;
console.log(threeSum(arr, target));