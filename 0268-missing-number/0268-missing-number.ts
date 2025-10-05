function missingNumber(nums: number[]): number {
    const n = nums.length;

    nums.sort((a, b) => a - b);

    for(let i = 0; i < n; i++) {
        if(i !== nums[i]) return i;
    }

    return nums[n-1] + 1;
};