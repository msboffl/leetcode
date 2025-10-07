function createTargetArray(nums: number[], index: number[]): number[] {
    const n = nums.length;
    const ans = [];
    for(let i = 0; i < n; i++) {
        ans.splice(index[i], 0, nums[i]);
    }

    return ans;
};