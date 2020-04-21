var maxSubArray = function(nums) {
    let curr = nums[0]
    let max = nums[0]
    
    for(let i = 0; i < nums.length; i++){
        curr = Math.max(nums[i] + curr , nums[i])
        console.log(curr)
        max = Math.max(curr, max)
    }
    return max
};

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))