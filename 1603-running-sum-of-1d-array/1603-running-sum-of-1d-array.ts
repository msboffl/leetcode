function runningSum(nums: number[]): number[] {
    const n = nums.length;
    const ans = [];

    ans[0] = nums[0];
    for(let i = 1; i < n; i++) {
        ans[i] = nums[i] + ans[i-1];
    }

    return ans;
};