function getConcatenation(nums: number[]): number[] {
    const n = nums.length;
    const ans = []

    for(let i = 0; i < n; i++) {
        ans[i] = nums[i];
        ans[i + n] = nums[i]
    }

    return ans;
};