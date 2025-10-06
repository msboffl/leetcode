function transformArray(nums: number[]): number[] {
    const n = nums.length;

    for(let i = 0; i < n; i++) {
        if(nums[i] % 2 === 0) nums[i] = 0;
        else nums[i] = 1;
    }

    nums.sort((a, b) => a - b)
    
    return nums;
};