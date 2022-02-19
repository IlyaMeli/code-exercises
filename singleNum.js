// let numArr = [4,1,2,1,2]
let numsObj = {};
let singleNumber = (nums) => {
  nums.map((num) => {
    if (numsObj[num]) {
      numsObj[num] = numsObj[num] + 1;
    } else {
      numsObj[num] = 1;
    }
  });
  for (const [key, value] of Object.entries(numsObj)) {
   if(value === 1){
       return key;
   }
  }
};
console.log(singleNumber(numArr));
