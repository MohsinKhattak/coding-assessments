function longest_sequence(nums) {
  if (!nums || nums.length === 0) return 0;

  const numSet = new Set(nums);
  let longest = 0;

  for (const num of numSet) {
    if (!numSet.has(num - 1)) {
      let current = num;
      let length = 1;

      while (numSet.has(current + 1)) {
        current++;
        length++;
      }

      longest = Math.max(longest, length);
    }
  }

  return longest;
}


// const list=[2,3,4,5,6,7,8,9,0,1,100,99,98,97]
const list=[100, 4, 200, 1, 3, 2]

console.log(longest_sequence(list))
