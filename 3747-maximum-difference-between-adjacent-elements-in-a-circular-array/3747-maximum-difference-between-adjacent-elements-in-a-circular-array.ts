function maxAdjacentDistance(nums: number[]): number {
    const n = nums.length;
    let maxDiff = 0
    for(let i = 1; i < n; i++) {
        maxDiff = Math.max(maxDiff, Math.abs(nums[i] - nums[i-1]));
    }

    const lastAndFirstDiff = Math.abs(nums[0] - nums[n-1]);
    
    return lastAndFirstDiff > maxDiff ? lastAndFirstDiff : maxDiff;
};