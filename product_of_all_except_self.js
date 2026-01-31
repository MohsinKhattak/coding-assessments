function productOfAllExceptSelf() {
  let products = [];
  for (let i = 0; i < arr.length; i++) {
    let product = 1;
    for (let j = 0; j < arr.length; j++) {
      if (i === j) {
        continue;
      } else {
        product *= arr[j];
      }
    }
    products.push(product);
  }
  return products;
}

let arr = [2, 3, 4, 5];
const result = productOfAllExceptSelf(arr);
console.log(result);
