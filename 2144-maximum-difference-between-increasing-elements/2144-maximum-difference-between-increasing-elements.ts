function maximumDifference(nums: number[]): number {
    const n = nums.length;

    let max = -1;
    for(let i = 0; i < n; i++) {
        for(let j = 0; j < n; j++) {
            if(i < j && nums[i] < nums[j]) {
                max = Math.max(max, nums[j] - nums[i])
            }
        }
    }

    return max;
};