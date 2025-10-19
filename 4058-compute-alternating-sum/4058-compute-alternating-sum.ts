function alternatingSum(nums: number[]): number {
    const n = nums.length;
    let sum = 0;

    for(let i = 0; i < n; i++) {
        if(i % 2 === 0) sum += nums[i];
        else sum -= nums[i];
    }

    return sum;
};