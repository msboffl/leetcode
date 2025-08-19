function zeroFilledSubarray(nums: number[]): number {
    const n = nums.length;
    let count = 0;
    let streak = 0;
    for(let i = 0; i < n; i++) {
        if(nums[i] === 0) {
            streak++;
            count += streak
        } else {
            streak = 0
        }
    }

    return count;
};