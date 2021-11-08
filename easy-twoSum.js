
var twoSum = function(nums, target) {
    let sum = 0;
    let result = [];
    let counter = -2;
    for(let i = 0; i < nums.length; i++){
        counter ++;
        if(sum > target){
            i = i- counter;    
            result = [];
            counter = -1;
            sum = 0;  
        }
        if(sum === target){
            break;
        }
        sum += nums[i];
        result.push(i)
    }
    return result;
};

console.log(twoSum([1,2,3,4,5,6],4));